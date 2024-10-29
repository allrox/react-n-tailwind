// import CardImage from './components/CardImage';
// import CardTitle from './components/CardTitle';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <body className="bg-gradient-to-b from-slate-100 to-slate-200 min-h-screen">
      <header>

        <div className="w-screen bg-sky-900 py-16 px-10 bg-[url('/src/img/bg-texture.webp')] bg-auto">
          <h1 className="text-white font-medium text-4xl text-center uppercase tracking-tight">
            Just a Tailwind CSS Lab!
          </h1>
        </div>

        <div className="mx-2 py-10">
          <p className="text-xl text-center">Understanding how things runs under <span className="font-bold">Tailwind</span>.</p>
        </div>
      </header>

      <div className="px-4">

        <div className="container grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">

          <ProductCard imageURL="./img/sample-image.webp" badge="Promotional badge" title="Product short description" alt="Imagem do produto" oldPrice="100" price="49,90">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </ProductCard>

          <ProductCard imageURL="./img/sample-image.webp" badge="Promotional badge" title="Product short description" alt="Imagem do produto" oldPrice="100" price="49,90">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </ProductCard>

          <ProductCard imageURL="./img/sample-image.webp" badge="Promotional badge" title="Product short description" alt="Imagem do produto" oldPrice="100" price="49,90">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </ProductCard>

          <ProductCard imageURL="./img/sample-image.webp" badge="Promotional badge" title="Product short description" alt="Imagem do produto" oldPrice="100" price="49,90">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </ProductCard>

        </div>

      </div>



    </body>

  );
}

export default App;
