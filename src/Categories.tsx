import {
	Paper,
	Container,
	Grid,
	Col,
	Box,
	Group,
	UnstyledButton,
	TextInput,
	Checkbox,
	Stack,
	Anchor,
	Text,
	Image,
	Button,
	ButtonProps,
} from "@mantine/core";
import {
	IconBrandFacebookFilled,
	IconBrandLinkedin,
	IconBrandTwitterFilled,
	IconBrandYoutubeFilled,
	IconBrandWhatsapp,
} from "@tabler/icons-react";
import React from "react";
import Rect16 from "./Assets/Rectangle 16.png";
import Rectangle70 from "./Assets/Rectangle70x70.png";
import bgdigitalindicator from "./Assets/digitalIndicator.png";
import BluerectangleBg from "./Assets/BlueRectangleBg.png";
import DigitalClock from "./Assets/image 375.png";
import GlassManufacturing from "./Assets/glass-manufacturing.png";
import YellowBg from "./Assets/yellowBg.png";
import GreyBg from "./Assets/greyBg.png";
import GreyBgLeft from "./Assets/GreyBgLeft.png";
import YellowBgLeft from "./Assets/YellowBgLeft.png";
import category from "./Assets/category.png";
import footer from "./Assets/footer.png";

type Props = {};

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

const Categories = (props: Props) => {
	return (
		<Paper w={1440} h={5535} withBorder>
			<Container mt={-73}>
				<Grid gutter="lg">
					<Col span={6}>
						<Box>
							<Text
								size="32px"
								w={558}
								h={102}
								weight={600}
								pt={105}
								style={{ lineHeight: "51.2px" }}
								color="#292929"
								ml={-160}
							>
								Explore Our Products{" "}
							</Text>
						</Box>
						<Text h={331} w={595} color="#555459" size={16} weight={400} mb={40} ml={-160} pt={85}>
							We are one of the most prominent manufacturers and exporters of a broad range of
							microprocessors and digital-based electronic process control instruments. Our product
							range includes Temperature and Process Indicators, Large/Jumbo Display Indicators,
							Portable Thermometers, Process Controllers such as On-Off Controllers, PID
							Controllers, Ramp/Soak Controllers, and Multi Zone Controllers, Temperature and
							Process Data Loggers and Scanners, Temperature, Humidity Sensors and Transmitters.
							<br />
							<br />
							We also have Indicators, and Controllers, Clean Room Monitoring Systems for
							Environment, Cold Storage, Data Centre, Server Room, Greenhouse, Warehouse to measure
							Temperature, Humidity, and Differential Pressure. <br />
							<br />
							Thyristor Triggering Cards, Thyristor Power Controllers, Signal
							Converters/Conditioners and Isolators, Molten Metal Pyrometers, DC Motor Controllers,
							Motor Soft Starters, IoT Modules, Instrumentation Control Panels, Data Acquisition
							Software, Customized Instruments, and many more services.
						</Text>
					</Col>
					<Col span={6}>
						<Image
							src={Rect16}
							bg={"white"}
							width={509}
							height={624}
							pos={"absolute"}
							left={931}
							pr={0}
							mt={64}
						/>

						<Image
							src={category}
							alt="Sample"
							width={543}
							height={424}
							pos={"absolute"}
							mt={160}
							mr={112}
						/>
					</Col>
				</Grid>
			</Container>
			<Group noWrap spacing={0}>
				<Box w="100%" mt={89}>
					<Text size={"32px"} mt={128} ml={100} color="#292929" weight={600}>
						Categories{" "}
					</Text>
				</Box>
			</Group>
			<Box w="100%" mt={24}>
				<Group position="center">
					<Grid columns={8}>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Digital Indicator
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Thyristor Power Controller{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Data Loggers & Scanners{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Humidity Instruments{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature & Humidity Instruments{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature Controller{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Digital Indicator{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature & Humidity Instruments{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Digital Indicator
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature & Humidity Instruments{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature Controller{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature & Humidity Instruments{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature Controller{" "}
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Digital Indicator
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Digital Indicator
								</Text>
							</Box>
						</Grid.Col>
						<Grid.Col span={1}>
							<Box pos="relative" w={1440} h={280}>
								<Image
									src={Rectangle70}
									height={70}
									width={70}
									pos="absolute"
									top={48}
									left={111}
									w="100%"
									h="100%"
								/>
								<Image
									src={bgdigitalindicator}
									height={50}
									width={50}
									pos="absolute"
									top={58}
									left={121}
									w="100%"
									h="100%"
								/>
								<Text w={55} size={10} align="center" ml={121} pt={126}>
									Temperature & Humidity Instruments{" "}
								</Text>
							</Box>
						</Grid.Col>
					</Grid>
				</Group>
			</Box>

			<Container>
				<Grid gutter="lg">
					<Col span={6}>
						<Image
							src={GreyBg}
							alt="Vision"
							height={625}
							width={505}
							pos="absolute"
							pl={0}
							left={0}
						/>
						<Image
							src={DigitalClock}
							alt="Vision"
							width={543}
							height={424}
							pos={"absolute"}
							left={114}
							mt={114}
						/>
					</Col>
					<Col span={6}>
						<Text
							size="32px"
							w={596}
							h={44}
							weight={600}
							mr={114}
							mt={134}
							style={{ lineHeight: "51.2px" }}
							color="#292929"
						>
							Digital Indicators
						</Text>
						<Text
							h={110}
							w={596}
							color="#555459"
							size={16}
							weight={400}
							mb={40}
							mr={114}
							mt={24}
							style={{ lineHeight: "24px" }}
						>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Group>
								<Text size="20px" color="black" mt={102} weight={400}>
									View
								</Text>
							</Group>
						</UnstyledButton>
					</Col>
				</Grid>
			</Container>

			<Container mt={138}>
				<Grid gutter="lg">
					<Col span={6}>
						<Box>
							<Text
								size="32px"
								w={558}
								h={102}
								weight={600}
								pt={105}
								style={{ lineHeight: "51.2px" }}
								color="#292929"
								ml={-160}
							>
								Thyristor Power Controller
							</Text>
						</Box>
						<Text h={331} w={595} color="#555459" size={16} weight={400} mb={40} ml={-160} pt={85}>
							Libratherm offers ready to use SCR Power Controller for electrical heating loads
							ranging from 5 KW (Single Phase) to 360KW (Three Phase). This Thyristor Power
							Regulator Module comprises of suitable triggering card model LTC-12 or LTC-13 or
							LTC-15 or LTC-18, suitably rated back to back connected SCR Modules (with electrically
							isolated base, mounted on the heat sink, input and output clip-on type heavy-duty
							connectors or aluminum/copper bus bars, semiconductor fuses and thermal cutouts.
							<br />
							<br />
							The entire assembly is mounted on an MS powder-coated enclosure, which in turn can be
							easily mounted inside the closed control panel as desired.
						</Text>
						<UnstyledButton>
							<Text size="20px" color="black" mt={24} weight={400} ml={-155}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Col>
					<Col span={6}>
						<Image
							src={YellowBg}
							bg={"white"}
							width={505}
							height={624}
							pos={"absolute"}
							left={931}
							pr={0}
							mt={64}
						/>

						<Image
							src={GlassManufacturing}
							alt="Sample"
							width={543}
							height={424}
							pos={"absolute"}
							mt={160}
							mr={112}
						/>
					</Col>
				</Grid>
			</Container>

			<Container mt={137}>
				<Grid gutter="lg">
					<Col span={6}>
						<Image
							src={BluerectangleBg}
							alt="Vision"
							height={625}
							width={505}
							pos="absolute"
							pl={0}
							left={0}
						/>
						<Image
							src={DigitalClock}
							alt="Vision"
							width={543}
							height={424}
							pos={"absolute"}
							left={114}
							mt={114}
						/>
					</Col>
					<Col span={6}>
						<Text
							size="32px"
							w={596}
							h={44}
							weight={600}
							mr={114}
							mt={134}
							style={{ lineHeight: "51.2px" }}
							color="#292929"
						>
							Digital Indicators
						</Text>
						<Text
							h={110}
							w={596}
							color="#555459"
							size={16}
							weight={400}
							mb={40}
							mr={114}
							mt={24}
							style={{ lineHeight: "24px" }}
						>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Group>
								<Text size="20px" color="black" mt={102} weight={400}>
									Shop Now
								</Text>
							</Group>
						</UnstyledButton>
					</Col>
				</Grid>
			</Container>

			<Container mt={138}>
				<Grid gutter="lg">
					<Col span={6}>
						<Box>
							<Text
								size="32px"
								w={558}
								h={102}
								weight={600}
								pt={105}
								style={{ lineHeight: "51.2px" }}
								color="#292929"
								ml={-160}
							>
								Humidity Instruments
							</Text>
						</Box>
						<Text h={331} w={595} color="#555459" size={16} weight={400} mb={40} ml={-160} pt={85}>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Text size="20px" color="black" mt={24} weight={400} ml={-155}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Col>
					<Col span={6}>
						<Image
							src={GreyBgLeft}
							bg={"white"}
							width={505}
							height={624}
							pos={"absolute"}
							left={931}
							pr={0}
							mt={64}
						/>

						<Image
							src={category}
							alt="Sample"
							width={543}
							height={424}
							pos={"absolute"}
							mt={160}
							mr={112}
						/>
					</Col>
				</Grid>
			</Container>

			<Container mt={137}>
				<Grid gutter="lg">
					<Col span={6}>
						<Image
							src={YellowBgLeft}
							alt="Vision"
							height={625}
							width={505}
							pos="absolute"
							pl={0}
							left={0}
						/>
						<Image
							src={DigitalClock}
							alt="Vision"
							width={543}
							height={424}
							pos={"absolute"}
							left={114}
							mt={114}
						/>
					</Col>
					<Col span={6}>
						<Text
							size="32px"
							w={596}
							h={44}
							weight={600}
							mr={114}
							mt={134}
							style={{ lineHeight: "51.2px" }}
							color="#292929"
						>
							Signal Isolators & Conditioners
						</Text>
						<Text
							h={110}
							w={596}
							color="#555459"
							size={16}
							weight={400}
							mb={40}
							mr={114}
							mt={24}
							style={{ lineHeight: "24px" }}
						>
							Experts in lighting, we’ve been creating task lights, desk lamps and table lamps for
							over 80 years. All our lamps uphold the original Anglepoise design concept whilst
							incorporating essential modern features. You’ll probably recognise some of the classic
							profiles when browsing our wide range.
							<br />
							<br />
							You’ll probably recognise some of the classic profiles when browsing our wide range.
							Whether you’re looking to add style to your workspace with a modern office desk lamp,
							a small desk lamp for tight spaces or, a reading lamp for an ambient study glow,
							you’ll find the right table and desk lamp for you.
						</Text>
						<UnstyledButton>
							<Group>
								<Text size="20px" color="black" mt={102} weight={400}>
									Shop Now
								</Text>
							</Group>
						</UnstyledButton>
					</Col>
				</Grid>
			</Container>
			<Paper w={1440} h={824} withBorder mt={1035}>
				<Box
					style={{
						backgroundColor: "#F5C44E",
						height: 312,
						width: 1312,
						marginLeft: 64,
						marginTop: -750,
					}}
				>
					<Text color="#292929" size={32} weight={600} pt={40} ml={80}>
						REQUEST A CALL BACK
					</Text>

					<Text color="#292929" size={14} weight={400} pt={12} ml={80}>
						Connect with us to know more about our new products, sales and launches!
					</Text>
					<Container pos={"absolute"} pl={80} pt={12}>
						<Grid>
							<Col span={3}>
								<TextInput
									label="First name"
									variant="unstyled"
									style={{
										border: "none",
										borderBottom: "1px solid #000",
									}}
								/>
							</Col>
							<Col span={3}>
								<TextInput
									label="Last name"
									variant="unstyled"
									style={{
										border: "none",
										borderBottom: "1px solid #000",
									}}
								/>
							</Col>
							<Col span={3}>
								<TextInput
									label="Email"
									variant="unstyled"
									style={{
										border: "none",
										borderBottom: "1px solid #000",
									}}
								/>
							</Col>
						</Grid>
						<Grid>
							<Checkbox
								mt={32}
								styles={{
									input: {
										border: " 2px solid",
										borderColor: "#000",
										borderRadius: "0px",
										backgroundColor: "#F5C44E",
									},
								}}
								label="I’m happy to recieve marketing communications and agree to the data policy"
								w={403}
								color="dark"
							/>
							<OptionsButton w={138} mt={28} ml={98}>
								SEND
							</OptionsButton>
							<Image src={footer} width={454} height={368} ml={702} mt={-327} />
						</Grid>
					</Container>
				</Box>

				<Group>
					<Stack>
						<Text size={14} weight={700} mt={64} ml={144}>
							USEFUL LINKS
						</Text>
						<Text size={14} weight={400} mt={30} ml={144} color="#555459">
							Careers
						</Text>
						<Text size={14} weight={400} mt={14} ml={144} color="#555459">
							Terms of Service
						</Text>
						<Text size={14} weight={700} mt={30} ml={144}>
							WE ARE SOCIAL!
						</Text>
						<Text size={14} weight={400} mt={30} ml={144} color="#555459">
							<Group>
								<IconBrandFacebookFilled size={24} color="#555459" />
								<IconBrandLinkedin size={24} color="#555459" />
								<IconBrandTwitterFilled size={24} color="#555459" />
								<IconBrandYoutubeFilled size={24} color="#555459" />
								<IconBrandWhatsapp size={24} color="#555459" />
							</Group>
						</Text>
					</Stack>
					<Stack>
						<Text size={14} weight={700} mt={64} ml={144}>
							POLICIES
						</Text>
						<Text size={14} weight={400} mt={30} ml={144} color="#555459">
							Quality Policy
						</Text>
						<Text size={14} weight={400} mt={10} ml={144} color="#555459">
							Privacy Policy
						</Text>
						<Text size={14} weight={400} mt={10} ml={144} color="#555459">
							Shipping Policy
						</Text>
						<Text size={14} weight={400} mt={10} ml={144} color="#555459">
							Cancellation Policy
						</Text>

						<Text size={14} weight={400} mt={10} ml={144} color="#555459">
							Return & Refund Policy
						</Text>
					</Stack>
					<Stack>
						<Text size={14} weight={700} mt={64} ml={144}>
							WAYS TO CONNECT
						</Text>
						<Text size={14} weight={400} mt={30} ml={144} color="#555459">
							Email: <br />
							<Anchor>
								enquiry@libratherm.com, <br />
								libratherm@libratherm.com
							</Anchor>
						</Text>
						<Text size={14} weight={400} mt={10} ml={144} color="#555459">
							Mobile: <br />
							<Anchor>
								+91-8104971152 +91-8104971154, <br />
								+91-9082687279, +91-9821136685
							</Anchor>
						</Text>

						<Text size={14} weight={400} mt={10} ml={144} color="#555459">
							Landline: <br />
							<Anchor>+91-22-42555334</Anchor>
						</Text>
					</Stack>
					<Stack>
						<Text size={14} weight={700} mt={64} ml={102}>
							OFFICE ADDRESS
						</Text>
						<Text size={14} weight={400} mt={30} ml={102} color="#555459">
							401-403, Diamond Industrial <br /> Estate,Ketki Pada Road, Dahisar <br /> (East),
							Mumbai 400068, <br /> Maharashtra, India.
						</Text>
						<OptionsButton ml={102} mt={26}>
							DOWNLOAD BROCHURE
						</OptionsButton>
						<PrimaryButton
							ml={102}
							mt={14}
							leftIcon={<IconBrandWhatsapp color="#25D366" size={24} />}
							style={{
								paddingRight: "8px",
							}}
						>
							Get it on Whatsapp
						</PrimaryButton>
					</Stack>
				</Group>
			</Paper>
		</Paper>
	);
};

export default Categories;
