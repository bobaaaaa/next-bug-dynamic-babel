import dynamic from "next/dynamic";

const Test = dynamic(() => import('../components/Test').then(mod => mod.Test), { loading: () => <div>Loading...</div> });

export default function Home() {
  return (
    <main
      className={`flex items-center justify-between p-24`}
    >
      <div>HelloWorld</div>
      <Test />
    </main>
  );
}
