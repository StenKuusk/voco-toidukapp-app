import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FoodCard from '../components/Food/FoodCard';

const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  background-color: #00e676;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #004d40;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #004d40;
  cursor: pointer;
`;

const HeroSection = styled.div`
  background-color: #00e676;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Question = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #004d40;
  margin-bottom: 10px;
`;

const Illustration = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 200px;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 12px;
  background-color: ${props => props.active ? '#00e676' : '#e0e0e0'};
  border: none;
  border-radius: 4px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: #004d40;
  cursor: pointer;
  margin-right: 4px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #004d40;
  margin: 20px 0 10px 0;
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const ViewAllButton = styled(Link)`
  display: block;
  background-color: #004d40;
  color: white;
  text-align: center;
  padding: 12px;
  border-radius: 4px;
  margin-top: 16px;
  text-decoration: none;
  font-weight: 500;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00e676;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-top: 1px solid #e0e0e0;
`;

const FooterButton = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #004d40;
  font-size: 24px;
`;

const Home = () => {
  const [activeTab, setActiveTab] = useState('Kopli');
  const [recentFoods, setRecentFoods] = useState([]);
  
  // Mock data for demonstration
  useEffect(() => {
    // This would typically be an API call
    const mockFoods = [
      { id: 1, name: 'Banaanid', image: '/api/placeholder/100/80', expiryDate: '01.03.2025' },
      { id: 2, name: 'Söörikud', image: '/api/placeholder/100/80', expiryDate: '27.02.2025' },
      { id: 3, name: 'Sai', image: '/api/placeholder/100/80', expiryDate: '10.03.2025' }
    ];
    
    setRecentFoods(mockFoods);
  }, []);
  
  return (
    <Container>
      <Header>
        <Logo>good sharing</Logo>
        <MenuButton>☰</MenuButton>
      </Header>
      
      <HeroSection>
        <Question>Mille järgi sul täna isu on?</Question>
        <Illustration>
          <img src="/api/placeholder/200/150" alt="Character looking into refrigerator" />
        </Illustration>
      </HeroSection>
      
      <Tabs>
        <Tab 
          active={activeTab === 'Kopli'} 
          onClick={() => setActiveTab('Kopli')}
        >
          Kopli
        </Tab>
        <Tab 
          active={activeTab === 'Põllu'} 
          onClick={() => setActiveTab('Põllu')}
        >
          Põllu
        </Tab>
      </Tabs>
      
      <SectionTitle>Viimati lisatud toidud</SectionTitle>
      
      <FoodGrid>
        {recentFoods.map(food => (
          <FoodCard 
            key={food.id}
            name={food.name}
            image={food.image}
            expiryDate={food.expiryDate}
          />
        ))}
      </FoodGrid>
      
      <ViewAllButton to={`/cabinet/${activeTab.toLowerCase()}`}>
        Vaata kõiki toite {activeTab} kapis
      </ViewAllButton>
      
      <Footer>
        <FooterButton>🔔</FooterButton>
        <FooterButton>➕</FooterButton>
        <FooterButton>⚙️</FooterButton>
      </Footer>
    </Container>
  );
};

export default Home;