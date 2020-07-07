import { useEffect, useRef } from 'react';

import Name from '../components/name';
import Layout from '../components/layout';

export default function Home() {
  const svg = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svg.current) {
      const paths = Array.from(svg.current.children) as SVGPathElement[];
      paths.forEach((path) => {
        path.style.strokeDasharray = String(path.getTotalLength());
        path.style.strokeDashoffset = String(path.getTotalLength());
        path.style.stroke = 'black';
      });
    }
  }, [svg]);

  return (
    <Layout description="">
      <main>
        <Name forwardedRef={svg} />
        <span>STUDENT / DEVELOPER</span>
      </main>
      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        span {
          font-size: 1.4rem;
          padding: 10px 0;
        }
      `}</style>

      <style jsx global>{`
        main svg path {
          animation: 3s ease-in-out forwards writeIn;
          stroke-width: 0.75;
          stroke-linecap: round;
          fill-opacity: 0;
        }

        @keyframes writeIn {
          to {
            stroke-dashoffset: 0;
            fill-opacity: 1;
          }
        }
      `}</style>
    </Layout>
  );
}
