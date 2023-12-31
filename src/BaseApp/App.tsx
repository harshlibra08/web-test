import Landing from "../Landing/Landing";
import Industries from "../Industries/Industries";
import Products from "../Products/Products";
import { Button, ButtonProps, MantineProvider, createTheme } from "@mantine/core";
import Navbar from "../Navbar/Navbar";
import WhoAreWe from "../Whoarewe/WhoAreWe";
import Excellence from "../Excellence/Excellence";
import OurStrengths from "../OurStrength/OurStrengths";
import OurProcess from "../OurProcess";
import OurSpecialization from "../OurSpecialization/OurSpecialization";
import World from "../World/World";
import "@mantine/core/styles.css";
import Testimonials from "../Testimonials";
// import Events from "../Events";
import OurTeam from "../OurTeam";
import OurGoals from "../OurGoals";
import OurVision from "../OurVision";
import OurBrand from "../OurBrand";
import JournalOne from "../Journal-1";
import JournalTwo from "../Journal-2";
import JournalThree from "../Journal-3";
import JournalFour from "../Journal-4";
import Categories from "../Categories";
import IOT from "../IOT";
import Services from "../Services";
import Application from "../Application";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import InnerProduct from "../InnerProduct";
import CartPage from "../CartPage";
import Checkout from "../Checkout";
import CareersPage from "../CareersPage";
import ProductsList from "../ProductsList";
import Wishlist from "../Wishlist";
import Login from "../Login";
import CategoryGrid from "../CategoryGrid";

const theme = createTheme({
	breakpoints: {
		xs: "576px",
		sm: "768px",
		md: "992px",
		lg: "1200px",
		xl: "1408px",
	},
});

export const OptionsButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#3E3E3E",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
			},

			label: {
				color: "#FFFFFF",
			},
		}}
		{...props}
	/>
);

export const PrimaryButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
			},
			label: {
				color: "#555459",
			},
		}}
		{...props}
	/>
);

export const SecondaryButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",
				color: "#292929",
				fontWeight: 600,
				lineHeight: "22.4px",
			},
			label: {
				color: "#292929",
			},
		}}
		{...props}
	/>
);

export const TertiaryButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",

				fontWeight: 700,
				lineHeight: "22.4px",
				fontSize: "12px",
			},
			label: {
				color: "#555459",
				textTransform: "uppercase",
			},
		}}
		{...props}
	/>
);

function App() {
	return (
		<MantineProvider
			theme={{
				fontFamily: "Poppins, sans-serif",
				colors: {
					"libra-gray": [
						"#f8f9fa",
						"#f1f3f5",
						"#e9ecef",
						"#dee2e6",
						"#ced4da",
						"#3E3E3E",
						"#5B5B5B",
						"#495057",
						"#343A40",
						"#212529",
					],
				},
				primaryShade: 5,
				radius: {
					xs: "4px",
				},
				defaultRadius: "xs",
			}}
		>
			<Navbar />
			<Landing />
			<Products />
			<Industries />
			<WhoAreWe />
			<Excellence />
			<OurStrengths />
			{/* <OurSpecialization /> */}
			<World />
			<Testimonials />
			<OurProcess />
			{/* <Events /> */}
			<OurTeam />
			<OurGoals />
			<OurVision />
			<OurBrand />
			<JournalOne />
			<JournalTwo />
			<JournalThree />
			<JournalFour />
			<IOT />
			<Services />
			<Application />
			<ContactUs />
			<Categories />
			<CategoryGrid />
			<ProductsList />
			<InnerProduct />
			<CartPage />
			<Checkout />
			<CareersPage />
			<Wishlist />
			<Login />
			<Footer />
		</MantineProvider>
	);
}

export default App;
