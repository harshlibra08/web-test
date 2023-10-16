import {
	Paper,
	Grid,
	Box,
	UnstyledButton,
	Text,
	Image,
	Card,
	Group,
	Stack,
	List,
	Divider,
	ThemeIcon,
} from "@mantine/core";
import React from "react";
import GlassManufacturing from "./Assets/glass-manufacturing.png";
import YellowBg from "./Assets/yellowBg.png";
import Panel from "./Assets/panel.png";
import { IconCheck, IconChevronDown, IconCoin } from "@tabler/icons-react";
import { OptionsButton, PrimaryButton, SecondaryButton } from "./BaseApp/App";

type Props = {};

const ProductsList = (props: Props) => {
	return (
		<>
			<Paper w={1440}>
				<Grid>
					<Grid.Col span={6}>
						<Box>
							<Text fz={32} w={558} ml={114} fw={600} mt={136} style={{ color: "#292929" }}>
								Thyristor Power Controller
							</Text>
						</Box>
						<Text w={595} style={{ color: "#555459" }} fz={14} fw={400} mb={40} ml={114} mt={32}>
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
							<Text fz={20} style={{ color: "#000" }} fw={400} ml={114} mt={24}>
								Shop Now
							</Text>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image src={YellowBg} w={505} h={624} pos={"absolute"} ml={207} mt={64} />

						<Image src={GlassManufacturing} w={543} h={424} pos={"absolute"} ml={125} mt={160} />
					</Grid.Col>
				</Grid>
			</Paper>
			<Paper w={1440} bg={"#F4F4F4"} h={2543} mt={200}>
				<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder>
					<Group>
						<Image src={Panel} w={284} h={284} ml={47} mt={49} />
						<Stack>
							<Text fz={18} fw={600} c={"#414141"} ml={37}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text c={"#E83214"} ml={37} fz={14} fw={600}>
								POW-3-PA-CL
							</Text>
							<List w={356} c={"#555459"} fz={12} fw={400} ml={37}>
								<List.Item>
									Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire
									Star
								</List.Item>
								<List.Item>
									3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
									Over Load Protection.
								</List.Item>
							</List>
						</Stack>
						<Divider orientation="vertical" ml={64} my={38}></Divider>
						<Stack justify="flex-start" w={290}>
							<Text fz={10} c={"#828282"} fw={400} ml={64}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text fz={24} fw={400} c={"#555459"} ml={64}>
								₹12,600 – ₹14,700
							</Text>

							<List ml={64}>
								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									In Stock
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>
										Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
									</Text>
								</List.Item>

								<List.Item fw={700} fz={12} c={"#555459"} icon={<IconCheck size="18px" />}>
									<Text lineClamp={1}>Get 10% Instant Discount Up to ₹2250</Text>
								</List.Item>
							</List>
							<Stack>
								<OptionsButton ml={66} w={290}>
									Select Options
								</OptionsButton>
								<PrimaryButton ml={66} w={290}>
									ADD TO WISHLIST
								</PrimaryButton>
							</Stack>
						</Stack>
					</Group>
				</Card>
			</Paper>
		</>
	);
};

export default ProductsList;
