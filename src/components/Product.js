import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Parallel Social (aka Momenel)",
    description:
      "Privacy first social media mobile app, that do not track you. Built with React native, Express, and Supabase.",
  },

  {
    name: "Base2",
    description: "A modern interface for the classic stackoverflow community. ",
  },
];

function Product() {
  return (
    <div>
      <ProjectCard></ProjectCard>
    </div>
  );
}

export default Product;
