import {
  ProjectLink,
  ProjectTechnologies
} from "../../../scenes/projects/components/project/components/style";
import { Row } from "../Layout";
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalOverlay,
  ModalText,
  ModalTitle
} from "./components/style";

const Modal = ({ setModal, project, language }) => {

  const handleModal = () => {
    setModal(false);
  };

  return (
    <ModalOverlay onClick={() => setModal(false)}>
      <ModalContainer>
        <ModalClose onClick={handleModal}>
          <i class="fa-solid fa-xmark"></i>
        </ModalClose>
        <ModalBody>
          <ModalTitle>
            {project.title}
            <div className="divider"></div>
          </ModalTitle>
          <ModalText>{project.subtitle[language]}</ModalText>
          <ModalText>
            {language === "pt" ? "Tecnologias utilizadas: " : "Technologies:"}
          </ModalText>
          <Row justify="flex-start">
            {project.technologies.map((tech, index) => (
              <ProjectTechnologies key={index}>{tech}</ProjectTechnologies>
            ))}
          </Row>
          <ModalText style={{ marginTop: "1rem" }}>
            {language === "pt" ? "Conheça mais:" : "Learn more:"}
          </ModalText>
          <Row justify="flex-start">
            {project.git && (
              <ProjectLink href={project.git}>
                <i className="fab fa-github"></i> GitHub
              </ProjectLink>
            )}
            {project.path && (
              <ProjectLink href={project.path}>
                <i className="fas fa-external-link-alt"></i>{" "}
                {language === "pt" ? "Visitar" : "Visit"}
              </ProjectLink>
            )}
          </Row>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
