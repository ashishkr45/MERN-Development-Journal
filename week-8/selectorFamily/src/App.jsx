import { useRecoilStateLoadable, RecoilRoot } from 'recoil';
import { quoteAtom } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <QuoteComponent />
    </RecoilRoot>
  );
}

function QuoteComponent() {
  const [quoteLoadable, setQuote] = useRecoilStateLoadable(quoteAtom);

  const refreshQuote = () => setQuote(quoteAtom);

  if (quoteLoadable.state === 'loading') return <p>Loading...</p>;
  if (quoteLoadable.state === 'hasError') return <p>Error loading quote.</p>;

  return (
    <div>
      <h3>{quoteLoadable.contents.content}</h3>
      <p>— {quoteLoadable.contents.author}</p>
      <button onClick={refreshQuote}>Get New Quote</button> {/* ✅ Refresh button */}
    </div>
  );
}

export default App;
