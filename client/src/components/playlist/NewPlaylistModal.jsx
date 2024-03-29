import ReactDOM from "react-dom";
import NewPlaylistForm from "./NewPlaylistForm";

const Modal = ({ open, close }) => {
    return ReactDOM.createPortal(
        <>
            {open ? (
                <div
                    className="fixed inset-0 flex justify-center items-center m-auto backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    onClick={() => close()}
                >
                    <div
                        className="bg-white w-4/5 h-4/5 rounded-xl pt-2 pb-2 pl-16 pr-4 relative flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close w-8 ml-auto mr-2 mt-4 text-xl"
                            onClick={() => close()}
                        >
                            X
                        </button>

                        <p className="flex justify-between text-3xl font-bold mb-4 mt-4">
                            {" "}
                            New Playlist{" "}
                        </p>

                        <div className="overflow-y-auto overflow-x-hidden w-full flex-1 mb-2">
                            <NewPlaylistForm close={close} />
                        </div>
                    </div>
                </div>
            ) : null}
        </>,
        document.getElementById("modal")
    );
};

export default Modal;
