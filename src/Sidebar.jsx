import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { FaGithub } from "react-icons/fa"; 
import { VscFiles, VscAccount } from "react-icons/vsc";



function SidebarMenu() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar className='sidebar' defaultCollapsed={true}  backgroundColor='rgb(45, 66, 99)' >
        <Menu >
          <button className='menuitems'>
            <FaGithub className='icons'/>
          </button>
          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'end'}}>
            <button className='menuitems'>
            <VscFiles className='icons'/>
          </button>
            <button className='menuitems'>
            <VscAccount className='icons'/>
          </button>

          </div>
          
          {/* <MenuItem disabled={true}>
            <FaGithub className='icons'/>
          </MenuItem>
          <MenuItem disabled={true}> </MenuItem>
          <MenuItem disabled={true}> </MenuItem> */}
        </Menu>
      </Sidebar>
      
      
    </div>
  );
}

export default SidebarMenu;