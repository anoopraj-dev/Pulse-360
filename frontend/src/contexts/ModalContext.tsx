import { createContext, useContext, useState, type ReactNode } from "react";
import Modal from "../components/Modal";


interface ModalState {
  isOpen: boolean;
  message: string;
}

interface ModalContextValue {
  modal: ModalState;
  openModal: (message: string) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

const ModalProvider = ({ children }: ModalProviderProps)=> {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    message: "",
  });

  const openModal = (message = ""): void => {
    setModal({ isOpen: true, message});
  };

  const closeModal = (): void => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      <Modal isOpen={modal.isOpen} onClose={closeModal} message={modal.message} />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextValue => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return ctx;
};

export default ModalProvider;
