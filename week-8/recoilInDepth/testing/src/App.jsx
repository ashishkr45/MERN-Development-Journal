import { RecoilRoot, useRecoilValue } from 'recoil';
import { networkAtom, jobsAtom, messageAtom, notiCountAtom } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <NevBar />
    </RecoilRoot>
  );
}

function NevBar() {
  try {
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const messageCount = useRecoilValue(messageAtom);
    const notiCount = useRecoilValue(notiCountAtom);
    console.log({ networkCount, jobsCount, messageCount, notiCount });
    return (
      <div>
        <IconCompo name="Home" />
        <IconCompo name="My Network" count={networkCount} />
        <IconCompo name="Jobs" count={jobsCount} />
        <IconCompo name="Messaging" count={messageCount} />
        <IconCompo name="Notifications" count={notiCount} />
        <IconCompo name="Me" />
      </div>
    );
  } catch (error) {
    console.error("Error in NevBar:", error);
    return <div>Error in NevBar, loading data...</div>;
  }
}

function IconCompo({ name, count }) {
  return (
    <button>{count ? `${name}: ${count > 99 ? "99+" : count}` : name}</button>
  );
}

export default App;