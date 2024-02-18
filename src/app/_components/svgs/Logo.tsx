export const Logo: React.FC<SvgProps> = ({
  className,
  width = 130,
  height = 26,
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 26"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.9 20.3945V6.39453H36.02L41.84 14.4745L40.96 14.4545L46.8 6.39453H48.88V20.3945H46.72V14.5345C46.72 13.3879 46.7467 12.3345 46.8 11.3745C46.8533 10.4012 46.96 9.4212 47.12 8.43453L47.36 9.23453L42.02 16.3745H40.7L35.44 9.25453L35.66 8.43453C35.82 9.39453 35.9267 10.3545 35.98 11.3145C36.0333 12.2745 36.06 13.3479 36.06 14.5345V20.3945H33.9ZM56.5813 24.9945L59.1013 20.1145V21.6945L53.0613 9.89453H55.4613L58.6413 16.5145C58.9479 17.0745 59.2146 17.6079 59.4413 18.1145C59.6679 18.6212 59.8279 19.0745 59.9213 19.4745L59.5413 19.5345C59.7013 19.1345 59.8879 18.6745 60.1013 18.1545C60.3279 17.6345 60.5879 17.0612 60.8813 16.4345L63.7613 9.89453H66.1813L60.9613 20.4545L58.7813 24.9945H56.5813ZM70.3648 20.3945V6.39453H76.7448C77.9048 6.39453 78.9315 6.57453 79.8248 6.93453C80.7315 7.2812 81.4982 7.77453 82.1248 8.41453C82.7515 9.05453 83.2248 9.8012 83.5448 10.6545C83.8648 11.4945 84.0248 12.4079 84.0248 13.3945C84.0248 14.3945 83.8648 15.3212 83.5448 16.1745C83.2248 17.0279 82.7515 17.7679 82.1248 18.3945C81.5115 19.0212 80.7515 19.5145 79.8448 19.8745C78.9382 20.2212 77.9048 20.3945 76.7448 20.3945H70.3648ZM72.5248 18.5345L72.4648 18.3145H76.6448C77.5115 18.3145 78.2648 18.1945 78.9048 17.9545C79.5582 17.7145 80.0915 17.3745 80.5048 16.9345C80.9315 16.4945 81.2448 15.9745 81.4448 15.3745C81.6582 14.7745 81.7648 14.1145 81.7648 13.3945C81.7648 12.6879 81.6582 12.0412 81.4448 11.4545C81.2448 10.8545 80.9315 10.3345 80.5048 9.89453C80.0782 9.4412 79.5448 9.09453 78.9048 8.85453C78.2648 8.6012 77.5115 8.47453 76.6448 8.47453H72.4048L72.5248 8.29453V18.5345ZM93.9428 20.5945C92.7295 20.5945 91.6495 20.3612 90.7028 19.8945C89.7695 19.4279 89.0295 18.7812 88.4828 17.9545C87.9495 17.1279 87.6828 16.1879 87.6828 15.1345C87.6828 14.0679 87.9495 13.1279 88.4828 12.3145C89.0295 11.4879 89.7695 10.8412 90.7028 10.3745C91.6495 9.90786 92.7295 9.67453 93.9428 9.67453C95.1561 9.67453 96.2295 9.90786 97.1628 10.3745C98.0961 10.8412 98.8295 11.4879 99.3628 12.3145C99.9095 13.1279 100.183 14.0679 100.183 15.1345C100.183 16.1879 99.9095 17.1279 99.3628 17.9545C98.8295 18.7812 98.0961 19.4279 97.1628 19.8945C96.2295 20.3612 95.1561 20.5945 93.9428 20.5945ZM93.9428 18.7145C94.7295 18.7145 95.4361 18.5612 96.0628 18.2545C96.7028 17.9479 97.2028 17.5279 97.5628 16.9945C97.9361 16.4479 98.1095 15.8279 98.0828 15.1345C98.1095 14.4279 97.9361 13.8079 97.5628 13.2745C97.2028 12.7412 96.7028 12.3212 96.0628 12.0145C95.4361 11.7079 94.7295 11.5545 93.9428 11.5545C93.1561 11.5545 92.4428 11.7079 91.8028 12.0145C91.1761 12.3212 90.6761 12.7479 90.3028 13.2945C89.9428 13.8279 89.7695 14.4412 89.7828 15.1345C89.7695 15.8279 89.9428 16.4479 90.3028 16.9945C90.6761 17.5279 91.1761 17.9479 91.8028 18.2545C92.4428 18.5612 93.1561 18.7145 93.9428 18.7145ZM109.677 20.5945C108.557 20.5945 107.55 20.3545 106.657 19.8745C105.777 19.3945 105.077 18.7412 104.557 17.9145C104.037 17.0879 103.777 16.1612 103.777 15.1345C103.777 14.0945 104.037 13.1679 104.557 12.3545C105.077 11.5279 105.777 10.8745 106.657 10.3945C107.55 9.91453 108.557 9.67453 109.677 9.67453C110.77 9.67453 111.777 9.8612 112.697 10.2345C113.63 10.5945 114.35 11.1012 114.857 11.7545L113.717 13.3145C113.423 12.9812 113.05 12.6812 112.597 12.4145C112.157 12.1479 111.69 11.9345 111.197 11.7745C110.717 11.6145 110.237 11.5345 109.757 11.5345C108.997 11.5345 108.323 11.6945 107.737 12.0145C107.15 12.3212 106.69 12.7479 106.357 13.2945C106.023 13.8279 105.857 14.4412 105.857 15.1345C105.857 15.8279 106.03 16.4479 106.377 16.9945C106.737 17.5279 107.21 17.9545 107.797 18.2745C108.397 18.5812 109.057 18.7345 109.777 18.7345C110.337 18.7345 110.85 18.6679 111.317 18.5345C111.797 18.3879 112.237 18.2012 112.637 17.9745C113.037 17.7345 113.403 17.4812 113.737 17.2145L114.857 18.7345C114.257 19.2412 113.51 19.6812 112.617 20.0545C111.723 20.4145 110.743 20.5945 109.677 20.5945ZM123.387 20.5945C122.307 20.5945 121.321 20.4412 120.427 20.1345C119.547 19.8279 118.814 19.3345 118.227 18.6545L119.627 17.4145C120.094 17.8945 120.634 18.2612 121.247 18.5145C121.874 18.7545 122.567 18.8745 123.327 18.8745C123.621 18.8745 123.921 18.8545 124.227 18.8145C124.534 18.7745 124.814 18.7012 125.067 18.5945C125.334 18.4879 125.541 18.3479 125.687 18.1745C125.847 18.0012 125.927 17.7945 125.927 17.5545C125.927 17.1545 125.661 16.8479 125.127 16.6345C124.861 16.5412 124.541 16.4479 124.167 16.3545C123.794 16.2479 123.367 16.1479 122.887 16.0545C122.087 15.8812 121.387 15.6945 120.787 15.4945C120.187 15.2945 119.701 15.0345 119.327 14.7145C119.047 14.4612 118.834 14.1745 118.687 13.8545C118.541 13.5212 118.467 13.1412 118.467 12.7145C118.467 12.2479 118.587 11.8345 118.827 11.4745C119.067 11.1012 119.394 10.7812 119.807 10.5145C120.234 10.2345 120.727 10.0279 121.287 9.89453C121.847 9.74786 122.454 9.67453 123.107 9.67453C123.681 9.67453 124.261 9.73453 124.847 9.85453C125.447 9.97453 126.014 10.1612 126.547 10.4145C127.081 10.6679 127.527 10.9812 127.887 11.3545L126.767 12.7145C126.447 12.4612 126.081 12.2345 125.667 12.0345C125.254 11.8212 124.827 11.6612 124.387 11.5545C123.961 11.4345 123.554 11.3745 123.167 11.3745C122.847 11.3745 122.534 11.3945 122.227 11.4345C121.921 11.4745 121.634 11.5479 121.367 11.6545C121.114 11.7479 120.907 11.8812 120.747 12.0545C120.601 12.2145 120.527 12.4079 120.527 12.6345C120.541 12.7945 120.587 12.9479 120.667 13.0945C120.761 13.2279 120.887 13.3479 121.047 13.4545C121.287 13.6145 121.621 13.7612 122.047 13.8945C122.487 14.0145 122.987 14.1279 123.547 14.2345C124.254 14.3679 124.901 14.5279 125.487 14.7145C126.074 14.9012 126.561 15.1345 126.947 15.4145C127.281 15.6412 127.527 15.9145 127.687 16.2345C127.861 16.5412 127.947 16.9012 127.947 17.3145C127.947 17.9945 127.741 18.5812 127.327 19.0745C126.927 19.5679 126.381 19.9479 125.687 20.2145C124.994 20.4679 124.227 20.5945 123.387 20.5945Z"
        fill="black"
      />
      <path
        d="M10.814 9.82009C11.7452 9.21527 13.2548 9.21527 14.186 9.82009L24.3017 16.3908C25.2328 16.9957 25.2328 17.9763 24.3017 18.5811L14.186 25.1519C13.2548 25.7567 11.7452 25.7567 10.814 25.1519L0.698344 18.5811C-0.232781 17.9763 -0.232781 16.9957 0.698344 16.3908L10.814 9.82009Z"
        fill="#008000"
        fillOpacity="0.2"
      />
      <path
        d="M10.814 1.05908C11.7452 0.454263 13.2548 0.454263 14.186 1.05908L24.3017 7.62984C25.2328 8.23466 25.2328 9.21527 24.3017 9.82009L14.186 16.3908C13.2548 16.9957 11.7452 16.9957 10.814 16.3908L0.698344 9.82009C-0.232781 9.21527 -0.232781 8.23466 0.698344 7.62984L10.814 1.05908Z"
        fill="#0000FF"
        fillOpacity="0.2"
      />
    </svg>
  );
};