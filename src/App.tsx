// import { useRef, useState } from "react";

import Landing from "./Landing";
import Industries from "./Industries";
import Products from "./Products";
import Excellence from "./Excellence";

import {
	MantineProvider,
	Button,
	Image,
	Group,
	Autocomplete,
	Header,
	createStyles,
	ButtonProps,

	// NumberInputHandlers,
} from "@mantine/core";

import LibraLogo from "./Assets/LibraLogo.png";

import { IconSearch, IconUser, IconHeart, IconShoppingCart } from "@tabler/icons-react";

import OurStrengths from "./OurStrengths";
import WhoAreWe from "./WhoAreWe";
import World from "./World";
import OurProcess from "./OurProcess";
import Testimonials from "./Testimonials";
import Events from "./Events";
import OurTeam from "./OurTeam";
import OurGoals from "./OurGoals";
import OurSpecialization from "./OurSpecialization";
import OurBrand from "./OurBrand";
import OurVision from "./OurVision";
import Journal from "./Journal";
import Categories from "./Categories";
import IOT from "./IOT";
import Services from "./Services";
import Application from "./Application";
import ContactUs from "./ContactUs";
import InnerProduct from "./InnerProduct";
import CartPage from "./CartPage";
import CareersPage from "./CareersPage";
import CategoryGrid from "./CategoryGrid";
import Buttons from "./Buttons";

const OptionsButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#3E3E3E",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
				"&:hover": {
					backgroundColor: "#5B5B5B",
					color: "#555459",
				},
			},
			label: {
				color: "#FFFFFF",
			},
		}}
		uppercase={true}
		{...props}
	/>
);

const PrimaryButton = ({ ...props }: ButtonProps) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",
				color: "#555459",
				fontWeight: 600,
				lineHeight: "22.4px",
				border: "1px solid",
				"&:hover": {
					backgroundColor: "#f4f4f4",
					color: "#555459",
				},
			},
			label: {
				color: "#555459",
			},
		}}
		{...props}
	/>
);

const SecondaryButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",
				color: "#292929",
				fontWeight: 600,
				lineHeight: "22.4px",
				"&:hover": {
					backgroundColor: "#FFFFFF", // Override hover background color to match default state
				},
			},
			label: {
				color: "#292929",
			},
		}}
		{...props}
	/>
);

const TertiaryButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",

				fontWeight: 700,
				lineHeight: "22.4px",
				fontSize: "12px",

				"&:hover": {
					backgroundColor: "#FFFFFF", // Override hover background color to match default state
				},
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

	/* Navbar Header */
	const useStyles = createStyles((theme) => ({
		header: {
			paddingLeft: theme.spacing.md,
			paddingRight: theme.spacing.md,
		},

		inner: {
			display: "flex",
		},

		links: {
			[theme.fn.smallerThan("md")]: {
				marginLeft: 0,
			},
			marginLeft: theme.spacing.lg,
			paddingRight: 13,
			paddingTop: 23,
			paddingBottom: 21,

			color: "#292929",
			textAlign: "center",
			left: "361px",
			fontSize: "14px",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},

		search: {
			[theme.fn.smallerThan("xs")]: {
				display: "none",
			},
		},

		link: {
			display: "block",
			lineHeight: 1,
			padding: " 0 64px",
			borderRadius: theme.radius.sm,
			textDecoration: "none",
			color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
			fontSize: theme.fontSizes.sm,
			fontWeight: 500,
		},
	}));

	interface HeaderSearchProps {
		links: { link: string; label: string }[];
	}

	function HeaderSearch({ links }: HeaderSearchProps) {
		const { classes } = useStyles();

		const items = links.map((link) => (
			<a
				key={link.label}
				href={link.link}
				className={classes.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</a>
		));

		return (
			<Header height={56} className={classes.header}>
				<div className={classes.inner}>
					<Group>
						<Image src={LibraLogo} alt="Libratherm Logo" height={"40px"} width={"107px"} />
					</Group>

					<Group>
						<Group ml={50} spacing={5} className={classes.links}>
							{items}
						</Group>
						<Autocomplete
							className={classes.search}
							placeholder="Enter your search"
							icon={<IconSearch size="20px" stroke={1.5} color="#555459" />}
							data={[]}
							radius={32}
							w={308}
							h={36}
							styles={{
								input: {
									backgroundColor: "#F0F0F0",
									"::placeholder": {
										color: "#555459",
									},
									border: "none",
								},
							}}
						/>
					</Group>

					<Group spacing={24} style={{ marginLeft: "auto" }}>
						<IconUser size={24} color="#555459" />
						<IconHeart size={24} color="#555459" />
						<IconShoppingCart size={24} color="#555459" />
						<OptionsButton uppercase={false}>We're Hiring</OptionsButton>
					</Group>
				</div>
			</Header>
		);
	}

	// const [embla, setEmbla] = useState<Embla | null>(null);

	// const [value, setValue] = useState<number | "">(0);
	// const handlers = useRef<NumberInputHandlers>();

	// const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
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
			<HeaderSearch links={links} />

			<Landing />
			<Industries />
			<Products />
			<Excellence />
			<OurStrengths />
			<WhoAreWe />
			<World />
			<OurProcess />
			<Testimonials />
			<Events />
			<OurTeam />
			<OurGoals />
			<OurSpecialization />
			<OurBrand />
			<OurVision />
			<Journal />
			<Categories />
			<CategoryGrid />
			<IOT />
			<Services />
			<Application />
			<ContactUs />
			<InnerProduct />
			<CartPage />
			<CareersPage />
			<Buttons />
		</MantineProvider>
	);
}

export default App;
