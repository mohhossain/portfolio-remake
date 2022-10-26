const md = "# Rails authentication made simple

### Start your rails app using the following command:

```jsx
rails new appname --api
```

## Gems you’ll need:

```ruby
gem 'bcrypt', '~> 3.1.7'
```

```ruby
bundle install
```

## Checklists:

### Update your `/config/application.rb` file to add cookies

```ruby
# config/application.rb
module MyApp
  class Application < Rails::Application
    config.load_defaults 6.1
    # This is set in apps generated with the --api flag, and removes session/cookie middleware
    config.api_only = true

    # Must add these lines!
    # Adding back cookies and session middleware
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

    # Use SameSite=Strict for all cookies to help protect against CSRF
    config.action_dispatch.cookies_same_site_protection = :strict
  end
end
```

### Add cookies to `app/controllers/application_controller.rb`

```ruby
# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  include ActionController::Cookies
end
```

### Create User model and table

```ruby
class User < ApplicationRecord
  
  has_secure_password

end
```

The `has_secure_password`macro uses bcrypt to encrypt the password. It eliminates the need for hashing hashing the password manually. 

Create the migration file and add `username` and `password_digest` column. and run `rails db:migrate`

```ruby
class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.timestamps
    end
  end
end
```

**Note:** *The* `password_digest` *column is **required** in order for your user’s password to be hashed and stored safely.* 

Your schema should look like this: 

 

```ruby
create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
```

### Adding authorization to existing `application_controller.rb` file

```ruby
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
```

Your final application_controller.rb should look like this: 

```ruby
class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
```

### Create your UsersController

Add the `create` and `show` action to the `user_controller.rb` 

```ruby
class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
```

`skip_before_action` lets the user perform any controller action before authorizing the user. We need to `create` the users first in order for them to authorize. The `create` action will be triggered by the `post "/signup"` route. `post”/me”` will trigger the show action and return if the user is successfully logged in. User needs to add `username`, `password`, and `password_confirmation`. The post should look like the following: 

```json
{
	username: "Jason",
	password: "astrongpassword123",
	password_confirmation: "astrongpassword123"
}
```

### Add `session_controller.rb` file to your `app/controllers` folder

```ruby
class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end
```

`skip_before_action` lets the user perform any controller action before authorizing the user. The following `create` action will check if the user exists in the database with the correct credentials and make a new session for the user. `destroy` will be triggered by the `post”/logout”` and will delete the stored session. 

### Configure the routes **`/config/routes.rb/`**

```ruby
Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
```

**Note**: *These are the routes you need for auth, you may need additional routes based on your application requirement.*`````````````