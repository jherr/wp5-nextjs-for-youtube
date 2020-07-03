import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import("../components/Home"), {
  ssr: false,
});
export default () => <DynamicComponentWithNoSSR />;
