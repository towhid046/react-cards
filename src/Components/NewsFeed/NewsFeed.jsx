import NewsArticle from "./../NewsArticle/NewsArticle";
import './NewsFeed.css'
const NewsFeed = () => {
  const newsFeed = [
    {
      title: "The Joy of Cycling",
      author: "John Wheeler",
      publicationDate: "2022-03-15",
      content:
        "Cycling is more than just a mode of transportation; it's a journey towards improved physical and mental well-being. In this exploration, John Wheeler delves into the benefits of cycling, from cardiovascular health to stress reduction. Discover the joy of pedaling through scenic landscapes and the positive impact it can have on your overall happiness and fitness levels.",
    },
    {
      title: "Exercise for a Healthier You",
      author: "Dr. Emily Harris",
      publicationDate: "2022-05-20",
      content:
        "Dr. Emily Harris, a renowned fitness expert, breaks down the science behind exercise and its transformative effects on the body. Explore the diverse range of exercises that cater to different fitness levels and goals. Learn how regular physical activity not only enhances your physical health but also plays a crucial role in preventing chronic diseases and improving mood and cognitive function.",
    },
    {
      title: "Meditation Unveiled",
      author: "Sophie Tran",
      publicationDate: "2022-07-10",
      content:
        "In 'Meditation Unveiled,' Sophie Tran guides readers through the ancient practice of meditation, unraveling its profound impact on mental health. Delve into the art of mindfulness and its ability to reduce stress, anxiety, and enhance overall emotional well-being. Tran provides practical tips and insights to help readers integrate meditation into their daily lives, fostering a calmer and more centered existence.",
    },
    {
      title: "Mind Matters: The Power of Mental Health",
      author: "Dr. Michael Rodriguez",
      publicationDate: "2022-09-28",
      content:
        "Dr. Michael Rodriguez explores the intricate connection between physical exercise and mental health. Drawing on the latest research, this book sheds light on how regular physical activity can be a potent tool in managing and preventing mental health issues. Discover the neurobiological mechanisms behind the 'exercise effect' and gain valuable insights into maintaining a healthy mind through an active lifestyle.",
    },
    {
      title: "The Mindful Athlete",
      author: "Lisa Thompson",
      publicationDate: "2022-11-12",
      content:
        "Lisa Thompson, a sports psychologist, unveils the secrets of elite athletes who harness the power of mindfulness in their training. 'The Mindful Athlete' explores how combining physical prowess with mental resilience can lead to peak performance. Thompson shares practical exercises and anecdotes, demonstrating how mindfulness techniques can be applied not only in sports but also in everyday life for improved focus and stress management.",
    },
    {
      title: "Cycling for Serenity",
      author: "Alex Turner",
      publicationDate: "2023-01-05",
      content:
        "Embark on a journey with Alex Turner as he extols the virtues of cycling as a therapeutic practice. 'Cycling for Serenity' explores how this rhythmic and immersive activity can be a powerful antidote to the challenges of modern life. From the scenic routes to the rhythmic cadence of pedaling, discover how cycling can become a form of moving meditation, promoting inner peace and mental clarity.",
    },
  ];

  return (
    <>
      <h1 className="newsFeed_heading">News Feed (Task: 03)</h1>
      <div className="news_feed">
        {newsFeed.map((article) => (
          <NewsArticle article={article} />
        ))}
      </div>
    </>
  );
};

export default NewsFeed;
