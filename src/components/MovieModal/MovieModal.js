import React from "react";

function MovieModal({
    backdrop_path,
    title,
    name,
    overview,
    release_date,
    vote_average,
    first_air_date,
    setModalOpen,
}) {
    return (
        <div className="presentation z-50 absolute">
            <div className="wrapper-modal fixed inset-0  bg-slate-900/[0.7]  tap-highlight-transparent flex justify-center ">
                <section className="modal bg-zinc-900 m-auto relative max-w-[800px] shadow-2xl overflow-hidden rounded-lg transition-all duration-400 ease-in-out delay-200 animate-fadeIn">
                    <span
                        className="modal-close absolute right-5 top-5 cursor-pointer z-40 text-white"
                        onClick={() => {
                            setModalOpen(false);
                        }}
                    >
                        X
                    </span>
                    <img
                        className="modal__poster-img w-full h-auto"
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt="modal poster"
                    />
                    <div className="modal__content p-10 text-white">
                        <p className="modal__details text-lg font-bold">
                            <span className="modal__user-perc text-green-500 mr-3">
                                100% for you
                            </span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className="modal__title text-4xl my-4">
                            {title ? title : name}
                        </h2>
                        <p className="modal__overview text-xl ">
                            {" "}
                            평점: {vote_average}
                        </p>
                        <p className="modal__overview text-xl leading-relaxed">
                            {overview}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MovieModal;
