import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        // 스크롤 이벤트 리스너 추가
        window.addEventListener("scroll", handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search/?q=${e.target.value}`);
    };
    return (
        <nav
            className={`fixed top-0 w-full z-10 px-5 py-5 flex justify-between items-center transition-all ease-in duration-500 ${
                show ? "bg-black" : ""
            }`}
        >
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                className="fixed left-10 w-20 object-contain"
                onClick={() => (window.location.href = "/")}
                style={{ objectFit: "contain" }}
            />

            <input
                className="fixed bg-[#000000c7] rounded text-white p-1 border-none left-1/2 transform -translate-x-1/2"
                value={searchValue}
                onChange={handleChange}
                type="text"
                placeholder="영화를 검색해 주세요"
            />

            <img
                alt="user logo"
                src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                className="fixed right-10 w-8 object-contain"
                style={{ objectFit: "contain" }}
            />
        </nav>
    );
}

export default NavigationBar;
