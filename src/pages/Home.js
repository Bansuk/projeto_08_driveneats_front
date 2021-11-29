import { Header, Menu, Footer } from '../styles/styleHome';

const Home = () => {
  return (
    <>
      <Header>
        <h1>DrivenEats</h1>
        <span>Sua comida em 6 minutos</span>
      </Header>
      <Menu></Menu>
      <Footer>
        <button>Selecione os 3 itens para fechar o pedido</button>
      </Footer>
    </>
  );
};

export default Home;
