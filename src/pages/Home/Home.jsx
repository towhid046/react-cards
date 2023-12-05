import Users from "../../Components/UserProfiles/Users";
import ProductList from './../../Components/ProductList/ProductList';
import NewsFeed from './../../Components/NewsFeed/NewsFeed';
import ArticlePage from "../../Components/ArticlePage/ArticlePage";
const Home = () => {
  return (
    <>
      <div>
        <ProductList />
        <Users />
        <NewsFeed/>
        <ArticlePage/>
      </div>
    </>
  );
};
export default Home;
