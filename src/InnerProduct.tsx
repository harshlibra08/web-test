import {
	Paper,
	Container,
	Grid,
	// Col,
	Divider,
	Group,
	ActionIcon,
	rem,
	List,
	UnstyledButton,
	Box,
	Stack,
	Autocomplete,
	Card,
	Image,
	Text,
	Select,
	NumberInput,
	Table,
	ScrollArea,
	Button,
	ButtonProps,
	NumberInputHandlers,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import Category from "./Assets/category.png";

import RectangleGreyLeft from "./Assets/Rectangle1027Grey.png";
import Panel from "./Assets/panel.png";
import PanelFront from "./Assets/panelfront1.png";
import Panel2 from "./Assets/panel2.png";
import PanelBg from "./Assets/panelbg.png";
import Model2 from "./Assets/modl2.png";
import YellowBg from "./Assets/yellowBg.png";
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

const PrimaryButton = ({ ...props }: ButtonProps) => (
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

const InnerProduct = (props: Props) => {
	const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
	const [value, setValue] = useState<number | "">(0);
	const handlers = useRef<NumberInputHandlers>();

	return (
		<>
			<Paper withBorder w={1440} h={3686}>
				<Container mt={0}>
					<Grid gutter="xl">
						<Grid.Col span={6}>
							<Image
								src={RectangleGreyLeft}
								alt="Vision"
								height={680}
								width={710}
								pos="absolute"
								pl={0}
								left={0}
							/>
							<Image
								src={Panel}
								alt="Vision"
								width={256.221}
								height={327}
								pos={"absolute"}
								left={227}
								mt={114}
							/>
							<Image
								src={PanelBg}
								alt="Vision"
								width={62}
								height={60}
								pos={"absolute"}
								left={253}
								mt={473}
							/>
							<Image
								src={PanelFront}
								alt="Vision"
								width={62}
								height={60}
								pos={"absolute"}
								left={253}
								mt={473}
							/>

							<Image
								src={PanelBg}
								alt="Vision"
								width={53}
								height={60}
								pos={"absolute"}
								left={333}
								mt={473}
							/>
							<Image
								src={Panel2}
								alt="Vision"
								width={53}
								height={60}
								pos={"absolute"}
								left={333}
								mt={473}
							/>
							<Image
								src={PanelBg}
								alt="Vision"
								width={62}
								height={60}
								pos={"absolute"}
								left={403}
								mt={473}
							/>
							<Image
								src={PanelFront}
								alt="Vision"
								width={62}
								height={60}
								pos={"absolute"}
								left={403}
								mt={473}
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Text size="24px" w={468} fw={600} ml={98} mt={44} color="#292929">
								Three Phase Thyristor Power Controller – POW-3-PA{" "}
							</Text>
							<Text color="#777" size="md" fw={400} ml={98} mt={4}>
								Digital Indicator : Category
							</Text>
							<Text color="#262728" size="lg" fw={600} ml={98} mt={24}>
								₹ 4000
							</Text>
							<Text color="#FF6951" size="xs" fw={400} ml={98} mt={4}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Divider my={24} ml={98} w={558} h={0.5}></Divider>
							<Text color="#555459" size="sm" fw={300} ml={98} mt={24}>
								Configuration: (1 AI + 1 AO )<br /> Size: 96 x 96 x 75
								<br /> Part No: 1304
							</Text>
							<Group ml={98} mt={24} w={550}>
								<Select
									label="Select Part Number"
									placeholder="Choose an option"
									data={[
										{ value: "react", label: "React" },
										{ value: "ng", label: "Angular" },
										{ value: "svelte", label: "Svelte" },
										{ value: "vue", label: "Vue" },
									]}
								></Select>
								<Select
									ml={24}
									label="Select Relay Card"
									placeholder="CPC"
									data={[
										{ value: "react", label: "React" },
										{ value: "ng", label: "Angular" },
										{ value: "svelte", label: "Svelte" },
										{ value: "vue", label: "Vue" },
									]}
								></Select>
							</Group>
							<Group ml={98} mt={24} w={500}>
								<Text color="#555459" size="sm">
									Quantity
								</Text>
								<ActionIcon size={42} variant="default">
									–
								</ActionIcon>
								<NumberInput
									hideControls
									value={value}
									// onChange={(val) => setValue(val)}
									handlersRef={handlers}
									max={10}
									min={0}
									step={1}
									styles={{ input: { width: rem(20), textAlign: "center" } }}
								/>
								<ActionIcon size={42} variant="default">
									+
								</ActionIcon>
								<PrimaryButton>Add to Cart</PrimaryButton>
								<OptionsButton>Buy Now</OptionsButton>
							</Group>
							<Text fw={400} size={"16px"} color="#262728" ml={98} w={500} mt={33}>
								{" "}
								Key Features
								<List mt={16}>
									<List.Item
										style={{
											fontSize: "12px",
											fontWeight: "400",
											color: "#555459",
										}}
									>
										Accepts thermocouple, RTD(Pt-100), Infrared pyrometer.
									</List.Item>
									<List.Item
										style={{
											fontSize: "12px",
											fontWeight: "400",
											color: "#555459",
										}}
									>
										Both switching and linear PID control outputs.
									</List.Item>
									<List.Item
										style={{
											fontSize: "12px",
											fontWeight: "400",
											color: "#555459",
										}}
									>
										Servo start from the process temperature.{" "}
									</List.Item>
									<List.Item
										style={{
											fontSize: "12px",
											fontWeight: "400",
											color: "#555459",
										}}
									>
										User programmable 1-10 different patterns of ramp/soak steps.{" "}
									</List.Item>
									<List.Item
										style={{
											fontSize: "12px",
											fontWeight: "400",
											color: "#555459",
										}}
									>
										Retention and auto-execution of program in case of power failure.{" "}
									</List.Item>
									<List.Item
										style={{
											fontSize: "12px",
											fontWeight: "400",
											color: "#555459",
										}}
									>
										Facility to use as PID and ON / OFF controller.{" "}
									</List.Item>
								</List>
							</Text>
						</Grid.Col>
					</Grid>
				</Container>
				<Paper w={1440} h={63} withBorder mt={5}>
					<Group wrap="nowrap" ml={55} gap={72} pt={22}>
						<UnstyledButton>
							<Text size="sm" color="#292929" fw={400}>
								Description
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text size="sm" color="#292929" fw={400}>
								Specifications
							</Text>{" "}
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text size="sm" color="#292929" fw={400}>
								Input and Output Range
							</Text>
						</UnstyledButton>
						<UnstyledButton>
							{" "}
							<Text size="sm" color="#292929" fw={400}>
								Ordering Information
							</Text>
						</UnstyledButton>
					</Group>
				</Paper>
				<Container>
					<Grid gutter="lg">
						<Grid.Col span={6}>
							<Box>
								<Text
									size="lg"
									w={598}
									h={33}
									fw={600}
									mt={99}
									style={{ lineHeight: "51.2px" }}
									color="#292929"
									ml={-160}
								>
									Three Phase Thyristor Power Controller – POW-3-PA{" "}
								</Text>
							</Box>
							<Text h={331} w={664} color="#777" size="sm" fw={400} mb={40} ml={-160} mt={26}>
								Libratherm offers Microcontroller based multiple Ramp/Soak Programmable PID
								Temperature Controller Model PRC-967 which is designed to improve reliability,
								accuracy, and control for all processing applications. It features Ramp and Soak
								functions (the capability to control the temperature and its rate of change over a
								predetermined time span).
								<br />
								<br />
								This PID Programme Controller PRC-967 offers a single profile of 16 steps that can
								be programmed into the memory with the user-friendly membrane keyboard. Separate
								displays are provided to monitor simultaneously; the Process temperature, Set
								temperature, and the Program number. They can also be used as single set point
								control when the profile control is not desired. They accept user-selectable
								standard temperature sensors like K, R, S, and B type thermocouples
								<br />
								<br />
								The Profile Controller offers both switching outputs in the form of SSR driver or
								Triac to drive external single or three-phase Solid-state relays or load contactors
								and linear analog control outputs in the form of (4-20)mA or (0-5)volt or (0-10)VDC,
								which can be used to control heater power through Thyristor Power Regulators (for an
								electrical heating system) or to control the position of a modulating motor valve
								(for oil or gas-fired heating systems). The analog outputs can be directly connected
								to Libratherm make single-phase/three-phase SCR based phase angle fired power
								controllers, which are ideally suitable for both resistive and inductive heating
								load.
							</Text>
						</Grid.Col>
						<Grid.Col span={6}>
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
								src={Category}
								alt="Sample"
								width={543}
								height={424}
								pos={"absolute"}
								mt={160}
								ml={102}
							/>
						</Grid.Col>
					</Grid>
				</Container>
				<Container w={1440} ml={74}>
					<Text
						size="lg"
						w={598}
						h={33}
						fw={600}
						mt={200}
						style={{ lineHeight: "51.2px" }}
						color="#292929"
					>
						Specifications
					</Text>
					<Group w={1800}>
						<Stack>
							<Text color="#555459" size="sm" fw={600} mt={34}>
								Parametres
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={34}>
								Item
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Model
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Input Sensor
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Sensor Output
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Sensor Supply
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Humidity Range
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Humidity Accuracy
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Type
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Size
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Cable / Enclosure
							</Text>
							<Text color="#555459" size="sm" fw={600} mt={10}>
								Precautions for use
							</Text>
						</Stack>
						<Stack ml={110} w={1000}>
							<Text color="#555459" size="sm" fw={600} mt={34}>
								Description
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={34}>
								(T + RH) Sensor (OEM version)
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								HS – 440 (Only For Humidity)
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								For Temp.: Class A RTD Pt-100 element (Hayashi Denko – Japan)For %Rh: Honeywell make
								Humidity sensor HIH-4000{" "}
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								For Temperature Pt-100: 84.27 Ohms to 123.24 Ohms (-40 to 60 °C) (Alpha =
								0.00385)For %Rh: 0.0Volt @ 0% Rh and 3.33Vdc @ 100%Rh or0 to 1Vdc Linear{" "}
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								+/- 1 °C for Thermocouple throughout the range (Software linearized){" "}
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								0 to 100% Rh @ 0 to 50 °C0 to 90% @ 0 to 60 °C0 to 90% @ -10 to 50 °C{" "}
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								+/- 3% @ 25 °C / 50 %Rh{" "}
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								Wall / Surface Mounted
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								20 mm dia. x 75 mm long
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								2 to 5 meter PVC/PVC insulated multi-core cable with pin lugs / SS plastic.{" "}
							</Text>
							<Text color="#828282" size="sm" fw={600} mt={10}>
								Avoid condensation and drench. Avoid exposure to Saline, Inorganic and Organic Gas.g{" "}
							</Text>
						</Stack>
					</Group>
				</Container>
				<Container w={1440} ml={74}>
					<Group w={1440}>
						<Text
							size="lg"
							w={598}
							h={33}
							fw={600}
							mt={200}
							style={{ lineHeight: "51.2px" }}
							color="#292929"
						>
							Input and Output Range
						</Text>
						<Autocomplete
							ml={230}
							placeholder="Search for technical Info"
							leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
							data={[]}
							mt={200}
							radius={32}
							w={308}
							h={36}
							styles={{
								input: {
									backgroundColor: "#F0F0F0",
									// "::placeholder": {
									// 	color: "#555459",
									// },
									border: "none",
								},
							}}
						/>
					</Group>
					<Group w={1440} mt={29}>
						<Table mt={"md"} w={1152} h={405} withTableBorder striped verticalSpacing="md">
							<thead>
								<tr>
									<th>
										<Text ta="center">Type</Text>
									</th>
									<th>
										<Text ta="left">Input</Text>
									</th>
									<th>
										<Text ta="right" mr={32}>
											Range(°C)
										</Text>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Text ta="center">A0</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											User selectable K,R,S,B,
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											As below
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A1</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											K type : Cr/Al thermocouple
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											0 to 1372
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A2</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											R type : Pt/PtRh13% thermocouple
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											0 to 1768{" "}
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A3</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											S type : Pt/PtRh10% - thermocouple
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											0 to 1768{" "}
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A4</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											R type : Pt/PtRh13% thermocouple
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											0 to 1768{" "}
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A5</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											R type : Pt/PtRh13% thermocouple
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											0 to 1768{" "}
										</Text>
									</td>
								</tr>
							</tbody>
						</Table>
					</Group>
				</Container>
				<Container w={1440} ml={74}>
					<Group w={1440}>
						<Text
							size="lg"
							w={598}
							h={33}
							fw={600}
							mt={200}
							style={{ lineHeight: "51.2px" }}
							color="#292929"
						>
							Ordering Information{" "}
						</Text>
						<Autocomplete
							ml={230}
							placeholder="Search for technical Info"
							leftSection={<IconSearch size="20px" stroke={1.5} color="#555459" />}
							data={[]}
							mt={200}
							radius={32}
							w={308}
							h={36}
							styles={{
								input: {
									backgroundColor: "#F0F0F0",
									// "::placeholder": {
									// 	color: "#555459",
									// },
									border: "none",
								},
							}}
						/>
					</Group>
					<Group w={1440} mt={29}>
						<Table
							mt={"md"}
							w={1152}
							h={405}
							withTableBorder
							striped
							verticalSpacing="md"
							withColumnBorders
						>
							<thead>
								<tr>
									<th>
										<Text ta="center">Type</Text>
									</th>
									<th>
										<Text ta="left">Specifications</Text>
									</th>
									<th>
										<Text ta="right" mr={32}>
											Part No.
										</Text>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Text ta="center">A0</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or
											Low and End of Profile Relay outputs.For High Temperature Furnace control (up
											to 1700 °C).{" "}
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											1703-1
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A1</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or
											Low and End of Profile Relay outputs.For High Temperature Furnace control (up
											to 1700 °C).
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											1703-1
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A2</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or
											Low and End of Profile Relay outputs.For High Temperature Furnace control (up
											to 1700 °C).
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											1703-1
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A3</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or
											Low and End of Profile Relay outputs.For High Temperature Furnace control (up
											to 1700 °C).
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											1703-1
										</Text>
									</td>
								</tr>
								<tr>
									<td>
										<Text ta="center">A4</Text>
									</td>
									<td>
										<Text ta="left" color="#828282">
											Input from R, S, B t/c with (SSR + 0-5V or (4-20)mA) control output + High or
											Low and End of Profile Relay outputs.For High Temperature Furnace control (up
											to 1700 °C).
										</Text>
									</td>
									<td>
										<Text ta="right" color="#828282" mr={32}>
											1703-1
										</Text>
									</td>
								</tr>
							</tbody>
						</Table>
					</Group>
				</Container>
			</Paper>
			<Paper bg={"#f4f4f4"} withBorder w={1440} h={1040}>
				<Box>
					<Text ta="center" color="#292929" size="xl" fw={600} pt={69}>
						Compare the models
					</Text>
					<Text ta="center" color="#828282" size="md" fw={400}>
						Compare with similar items
					</Text>
				</Box>
				<ScrollArea w={1240} h={860} onScrollPositionChange={onScrollPositionChange}>
					<Group wrap="nowrap" ta="center">
						<Card bg={"#FFF"} w={273} h={709} ml={145} mt={64}>
							<Text ta="left" size="sm" color="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} width={131} height={167} mt={32} ml={70} />
							<Stack>
								<Text color="#555459" size="sm" fw={600} mt={32}>
									Key Features
								</Text>
								<Text color="#555459" size="sm" fw={600}>
									Design
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Input
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Range
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Resolution
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" size="sm" color="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} width={167} height={167} mt={32} ml={50} />
							<Stack>
								<Text color="#555459" size="sm" fw={600} mt={32}>
									Key Features
								</Text>
								<Text color="#555459" size="sm" fw={600}>
									Design
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Input
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Range
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Resolution
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" size="sm" color="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Panel} width={131} height={167} mt={32} ml={70} />
							<Stack>
								<Text color="#555459" size="sm" fw={600} mt={32}>
									Key Features
								</Text>
								<Text color="#555459" size="sm" fw={600}>
									Design
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Input
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Range
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Resolution
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
						<Card bg={"#FFF"} w={273} h={709} ml={20} mt={64}>
							<Text ta="left" size="sm" color="#555459" fw={700}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Divider mt={5}></Divider>
							<Image src={Model2} width={167} height={167} mt={32} ml={50} />
							<Stack>
								<Text color="#555459" size="sm" fw={600} mt={32}>
									Key Features
								</Text>
								<Text color="#555459" size="sm" fw={600}>
									Design
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Input
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Range
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
								<Divider></Divider>
								<Text color="#555459" size="sm" fw={600}>
									Resolution
								</Text>
								<Text color="#828282" size="sm" fw={400} mt={-10}>
									Microcontroller based with 12 bit ADC and dual 12 bit DAC
								</Text>
							</Stack>
						</Card>
					</Group>
				</ScrollArea>
			</Paper>
			<Paper withBorder w={1440} h={864}>
				<Box>
					<Text color="#292929" size="xl" fw={600} ta="center" pt={81}>
						Related Products
					</Text>
				</Box>
				<Group wrap="nowrap" ta="center">
					<Card bg={"#f7f7f7"} h={440} w={273} ml={144} mt={47}>
						<Text ta="left" size="sm" color="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} width={131} height={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} color="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" size="sm" color="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} width={131} height={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} color="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" size="sm" color="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} width={131} height={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} color="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
					<Card bg={"#f7f7f7"} h={440} w={273} ml={20} mt={47}>
						<Text ta="left" size="sm" color="#555459" fw={700}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} width={131} height={166} mt={32} ml={55} />
						<Text ta="center" size="md" fw={400} color="#414141" mt={34}>
							₹12,600 – ₹14,700
						</Text>
						<Stack gap="xs" align="stretch" py={15}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Group>
			</Paper>
		</>
	);
};

export default InnerProduct;
