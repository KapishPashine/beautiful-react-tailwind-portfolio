import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white p-4 rounded-lg w-[90vw] h-[60vw] max-w-[750px] max-h-[600px] overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="object-contain w-full h-full rounded-md"
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-black hover:scale-110 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-black hover:scale-110 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-10 h-10" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-12 right-0 text-black hover:scale-110 transition"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export const ProjectPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const project = state?.project;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const images = project ? [project.image, ...(project.subimage || [])] : [];

  useEffect(() => {
    if (project?.subimage?.length >= 0) {
      setLoadedImages(new Array(images.length).fill(false));
    }
  }, [project, images.length]);

  const handleImageLoad = (index) => {
    setTimeout(() => {
      setLoadedImages((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }, index * 200); // Delays each image's appearance
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-background px-4 py-10 ">

      <div className="max-w-5xl mx-auto flex justify-between items-center mb-10">
        <button onClick={() => navigate("/")} className="cosmic-button">
          Home
        </button>
<button
  onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
  className="cosmic-button"
>
  Contact
</button>

      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

        <div
          className={`mb-6 transition-opacity duration-1000 ease-in-out ${
            loadedImages[0] ? "opacity-100 rounded-xl shadow-md" : "opacity-0"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 md:h-96 object-cover cursor-pointer rounded-xl"
            onClick={() => openModal(0)}
            onLoad={() => handleImageLoad(0)}
          />
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium border-2 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-muted-foreground mb-8">
          This is a fullscreen project detail view showcasing a detailed breakdown of the design elements and features. Scroll to explore more images.
        </p>

        {project.subimage?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {project.subimage.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden transition-transform duration-300 ${
                  loadedImages[idx + 1]
                    ? "rounded-lg shadow hover:scale-[1.02]"
                    : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Subimage ${idx + 1}`}
                  className={`w-full h-48 object-cover cursor-pointer transition-opacity duration-1000 ease-in-out ${
                    loadedImages[idx + 1] ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={() => openModal(idx + 1)}
                  onLoad={() => handleImageLoad(idx + 1)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        images={images}
        currentIndex={currentImageIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};
