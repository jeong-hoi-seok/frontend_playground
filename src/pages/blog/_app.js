
import BlogSide from "@/components/BlogSide";

export default function App({ Component, pageProps }) {
  return(
    <>    
        <BlogSide></BlogSide>
        <Component {...pageProps} />
    </>
  );
}
