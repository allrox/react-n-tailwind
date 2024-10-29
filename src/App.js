import ProductCard from './components/ProductCard';

const productListData = [
  {
    imageURL: "./img/sample-image.webp",
    badge: "Summer Sale",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    oldPrice: "100",
    price: "49,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy with 50% Off!"
  },
  {
    imageURL: "./img/mockup-2.webp",
    badge: "New formulation!",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    price: "129,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy now!"
  },
  {
    imageURL: "./img/mockup-1.webp",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    alt: "Imagem do produto",
    oldPrice: "100",
    price: "50",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy with 50% Off!"
  },
  {
    imageURL: "./img/mockup-4.webp",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    price: "399,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy now!"
  },
  {
    imageURL: "./img/mockup-3.webp",
    badge: "Best anti-aging effect",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    oldPrice: "130",
    price: "89,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy with 30% Off!"
  },
  {
    imageURL: "./img/mockup-6.webp",
    badge: "Complete skincare",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    oldPrice: "800",
    price: "689,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy now!"
  },
]

function App() {
  return (
    <body >
      <header>

        <div className="w-screen bg-sky-900 py-12 px-10 bg-[url('/src/img/bg-texture.webp')] bg-auto">
          <h1 className="text-white font-medium text-3xl text-center uppercase tracking-tight">
            Just a React + Tailwind CSS Lab!
          </h1>
        </div>

        <div className="mx-2 mt-8 p-4 container mx-auto">
          <p className="text-xl text-center">Understanding how things runs under <span className="font-bold">React with Tailwind</span>.</p>
          <p className="py-4 text-center">This project aims something quite simple, I wanna understand how to set up properly the development environment with tools and frameworks. After that, I'll be able to work on evolving all the logical aspect and project visuals maybe adding some new sample blocks over the time as I try to enjoy the ride.</p>
        </div>

      </header>

      <main className="px-4">
        <div className="container grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 mx-auto mb-16">

          {
            productListData.map(function (item) {
              return (
                <ProductCard
                  imageURL={item.imageURL} 
                  alt={item.alt} 
                  badge={item.badge} 
                  title={item.title} 
                  rating={item.rating}
                  description={item.description} 
                  oldPrice={item.oldPrice} 
                  price={item.price} 
                  cta={item.cta} 
                />
              )
            })
          }

        </div>
      </main>

    </body>

  );
}

export default App;
