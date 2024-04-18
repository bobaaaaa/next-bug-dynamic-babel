import dynamic from "next/dynamic";

const Test = dynamic(() => import('../components/Test').then(mod => mod.Test), { loading: () => <div>Loading...</div> });

export default function Home() {
  return (
    <main>
      <div>HelloWorld</div>
      <Test />
    </main>
  );
}
