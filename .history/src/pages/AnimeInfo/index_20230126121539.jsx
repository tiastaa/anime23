import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import AnimeFullInfo from "../../components/AnimeFullInfo";
import Header from "../../components/Header";
import { useActions } from "../../hooks/UseActions";
import Footer from "../../components/Footer";
const AnimeInfo = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || 1;
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  useEffect(() => {
    fetchAnime(id);
  }, []);
  console.log(anime, loading, error);

  return (
    <>
      <Header />
      {loading ? (
        <h1>loading...</h1>
      ) : error == null ? (
        <AnimeFullInfo anime={anime}></AnimeFullInfo>
      ) : (
        <span>{error}</span>
      )}
      <Footer />
    </>
  );
};

export default AnimeInfo;
