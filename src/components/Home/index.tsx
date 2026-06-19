import HeroComponent from "./hero";
import InformationComponent from "./information";
import ExperiencesComponent from "./experiences";
import SkillsComponent from "./skills";
import RecommendsComponent from "./recommendations";
import LandingProjectsComponent from "./projects";

const HomeComponent = () => {
  return (
    <div>
      <HeroComponent />
      <InformationComponent />
      <ExperiencesComponent />
      <SkillsComponent />
      <LandingProjectsComponent />
      <RecommendsComponent />
    </div>
  );
};

export default HomeComponent;
