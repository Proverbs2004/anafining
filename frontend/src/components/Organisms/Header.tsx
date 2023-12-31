import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import ShapeImage from "components/atoms/ShapeImage";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header">
        <div className="header-image">
          <Link href="/category">
            <a>
              <ShapeImage
                shape={"circle"}
                src={"/favicon.png"}
                alt={"카테고리 아이콘"}
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div className="header-search">
          <SearchBar />
        </div>
        <div className="header-link">
          <Link href="/info">
            <a>비급여란?</a>
          </Link>
        </div>
        <div className="header-link">
          <Link href="/">
            <a>서비스 소개</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

//SSR랜더링을 위한 빈 데이터 객체 반환
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Header;
