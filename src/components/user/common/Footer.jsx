import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter = () => (
  <Footer className="text-center py-4">
    <div className="container mx-auto">
      <p className="text-gray-600">© 2024 TravelTrax. All Rights Reserved.</p>
    </div>
  </Footer>
);

export default CustomFooter;
