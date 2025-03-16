import { CustomModal } from "@/components";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CustomModal
        open={isOpen}
        setOpen={setIsOpen}
        title="Appointment Details"
        description=""
        size="w-[700px]"
        actions={
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </>
        }
      >
        <div className="px-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between mb-2">
              <div className="flex gap-2">
                <div className="bg-gray-100 rounded-full p-4 h-fit">UO</div>
                <div>
                  <p className="font-bold">User One</p>
                  <p className="text-sm font-medium text-gray-500">
                    user1@example.com
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    +023091324
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm font-medium text-gray-500 text-right">
                  March 16, 2025 10:50pm
                </p>
                <Button
                  className="cursor-pointer bg-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <CircleCheck size="12px" />
                  Confirm Appointment
                </Button>
              </div>
            </div>
            <hr />
            <div>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas
              vulputate feugiat tempus fermentum ac ultricies. Diam nam in
              sapien fringilla, aenean nibh tristique laoreet. Ridiculus
              pulvinar vestibulum felis praesent fames. Imperdiet morbi velit
              purus taciti dapibus. Platea convallis elit mollis integer
              torquent class quam quisque. Nostra vehicula iaculis conubia risus
              suspendisse magnis bibendum. Gravida orci torquent laoreet per
              aenean nunc cras, diam erat. Odio hac lacinia erat tempor taciti
              nibh; vivamus netus euismod. Eros leo tellus torquent; torquent
              libero adipiscing ridiculus varius feugiat.
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Modal;
