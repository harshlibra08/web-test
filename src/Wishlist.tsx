import { Paper, Text, Image, Card, Divider, Group, List, Stack } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import React from "react";
import { OptionsButton, PrimaryButton } from "./BaseApp/App";
import Panel from "./Assets/panel.png";

type Props = {};

const Wishlist = (props: Props) => {
	return (
		<Paper w={1440} h={1720} bg={"#f4f4f4"} mt={40}>
			<Text fz={32} fw={600} pt={56} ml={114}>
				My Wishlist (3 items)
			</Text>

			<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
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
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
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
			<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
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
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
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
			<Card w={1212} h={384} bg={"#FFF"} top={39} ml={114} withBorder mt={40}>
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
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
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
	);
};

export default Wishlist;
