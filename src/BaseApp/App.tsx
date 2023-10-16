import Landing from "../Landing/Landing";
import Industries from "../Industries/Industries";
import Products from "../Products/Products";
import { Button, ButtonProps, MantineProvider } from "@mantine/core";
import Navbar from "../Navbar/Navbar";
import WhoAreWe from "../Whoarewe/WhoAreWe";
import Excellence from "../Excellence/Excellence";
import OurStrengths from "../OurStrength/OurStrengths";
import OurProcess from "../OurProcess";
import OurSpecialization from "../OurSpecialization/OurSpecialization";
import World from "../World/World";
import "@mantine/core/styles.css";
import Testimonials from "../Testimonials";
import Events from "../Events";
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

export const OptionsButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#3E3E3E",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
				// "&:hover": {
				// 	backgroundColor: "#5B5B5B",
				// 	color: "#555459",
				// },
			},

			label: {
				color: "#FFFFFF",
			},
		}}
		// uppercase={true}
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
				// "&:hover": {
				// 	backgroundColor: "#f4f4f4",
				// 	color: "#555459",
				// },
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
				// "&:hover": {
				// 	backgroundColor: "#FFFFFF", // Override hover background color to match default state
				// },
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

				// "&:hover": {
				// 	backgroundColor: "#FFFFFF", // Override hover background color to match default state
				// },
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
	const links = [
		{ link: "#", label: "About us" },
		{ link: "#", label: "Products" },
		{ link: "#", label: "Journal" },
		{ link: "#", label: "Contact us" },
	];

	// const [embla, setEmbla] = useState<Embla | null>(null);

	// const [value, setValue] = useState<number | "">(0);
	// const handlers = useRef<NumberInputHandlers>();

	// const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
	return (
		<MantineProvider
			// withGlobalStyles
			// withNormalizeCSS
			theme={{
				fontFamily: "sans-serif",
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
			<OurSpecialization />
			<World />
			<OurProcess />
			<Events />
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
			<CartPage />
			<Checkout />
			<CareersPage />
			<InnerProduct />
			<ProductsList />

			{/*
			<CategoryGrid />
			</Testimonials/>
			<Footer />
			 */}
		</MantineProvider>
	);
}

export default App;
