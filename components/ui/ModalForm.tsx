"use client";

interface ModalFormProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactElement;
}

export default function ModalForm({
  isOpen,
  setIsOpen,
  children,
}: ModalFormProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal */}
          <div className="bg-card rounded-2xl shadow-lg w-full max-w-2xl p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Form Input</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            {children}
          </div>
        </div>
      )}
    </>
  );
}
