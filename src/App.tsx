import React, { useEffect, useState } from "react";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import BottomNavigation from "./components/BottomNavigation";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import LoadingScreen from "./components/LoadingScreen";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;
  overflow: hidden;
  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  const { network } = useTonConnect();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <StyledApp>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <AppContainer>
          <FlexBoxCol>
            <FlexBoxRow>
              <TonConnectButton />
              <Button>
                {network
                  ? network === CHAIN.MAINNET
                    ? "mainnet"
                    : "testnet"
                  : "N/A"}
              </Button>
            </FlexBoxRow>
            {currentPage === 0 && <Counter />}
            {currentPage === 1 && <TransferTon />}
            {currentPage === 2 && <Jetton />}
          </FlexBoxCol>
        </AppContainer>
      )}
      <BottomNavigation currentPage={currentPage} onPageChange={handlePageChange} />
    </StyledApp>
  );
};

export default App;
