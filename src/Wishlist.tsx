import {
	Paper,
	Text,
	Image,
	Card,
	Divider,
	Group,
	List,
	Stack,
	UnstyledButton,
	Grid,
	Pagination,
} from "@mantine/core";
import { IconCheck, IconCoin } from "@tabler/icons-react";
import React from "react";
import { OptionsButton, PrimaryButton } from "./BaseApp/App";
import Panel from "./Assets/panel.png";
import CardIpad from "../src/Assets/cardipad.png";

type Props = {};

const Wishlist = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={1720} bg={"#f4f4f4"} mt={40} visibleFrom="md">
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
			{/**MOBILE VIEW */}
			<Paper w={360} h={2720} bg={"#f4f4f4"} mt={40} hiddenFrom="xs">
				<Text fz={20} fw={600} pt={75} ml={16}>
					My Wishlist (3 items)
				</Text>
				<Paper w={360} h={650} hiddenFrom="xs" bg={"#f7f7f7"}>
					<Card withBorder h={650} w={327} ml={18} mt={32}>
						<Image src={Panel} w={131} h={166} ml={87} />
						<Text fz={16} c="#414141" mt={16} fw={600} ml={16}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text fz={12} ml={16} mt={16} c={"#828282"}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text ml={16} fz={20} fw={400} c="#414141">
							₹12,600 – ₹14,700
						</Text>
						<List w={296} c={"#555459"} fz={12} mt={14} fw={400} lh={"160%"}>
							<List.Item>
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
							</List.Item>
							<List.Item>
								3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
								Over Load Protection.
							</List.Item>
						</List>
						<Paper w={296} mt={38} withBorder h={56}>
							<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
								{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards
								EMI{" "}
							</Text>
							<UnstyledButton ml={27} fz={10}>
								View More
							</UnstyledButton>
						</Paper>
						<Stack gap="xs" align="stretch" mt={20}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Paper>
				<Paper w={360} h={650} hiddenFrom="xs" bg={"#f7f7f7"}>
					<Card withBorder h={650} w={327} ml={18} mt={32}>
						<Image src={Panel} w={131} h={166} ml={87} />
						<Text fz={16} c="#414141" mt={16} fw={600} ml={16}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text fz={12} ml={16} mt={16} c={"#828282"}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text ml={16} fz={20} fw={400} c="#414141">
							₹12,600 – ₹14,700
						</Text>
						<List w={296} c={"#555459"} fz={12} mt={14} fw={400} lh={"160%"}>
							<List.Item>
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
							</List.Item>
							<List.Item>
								3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
								Over Load Protection.
							</List.Item>
						</List>
						<Paper w={296} mt={38} withBorder h={56}>
							<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
								{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards
								EMI{" "}
							</Text>
							<UnstyledButton ml={27} fz={10}>
								View More
							</UnstyledButton>
						</Paper>
						<Stack gap="xs" align="stretch" mt={20}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Paper>
				<Paper w={360} h={1650} hiddenFrom="xs" bg={"#f7f7f7"}>
					<Card withBorder h={650} w={327} ml={18} mt={32}>
						<Image src={Panel} w={131} h={166} ml={87} />
						<Text fz={16} c="#414141" mt={16} fw={600} ml={16}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Text fz={12} ml={16} mt={16} c={"#828282"}>
							Prices are inclusive of Delivery Charges.
						</Text>
						<Text ml={16} fz={20} fw={400} c="#414141">
							₹12,600 – ₹14,700
						</Text>
						<List w={296} c={"#555459"} fz={12} mt={14} fw={400} lh={"160%"}>
							<List.Item>
								Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
							</List.Item>
							<List.Item>
								3 Wire Close or Open Delta Configurations with Current Control/Current Limit and
								Over Load Protection.
							</List.Item>
						</List>
						<Paper w={296} mt={38} withBorder h={56}>
							<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
								{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards
								EMI{" "}
							</Text>
							<UnstyledButton ml={27} fz={10}>
								View More
							</UnstyledButton>
						</Paper>
						<Stack gap="xs" align="stretch" mt={20}>
							<OptionsButton>Select Options</OptionsButton>
							<PrimaryButton>ADD TO WISHLIST</PrimaryButton>
						</Stack>
					</Card>
				</Paper>
			</Paper>

			{/**Tablet view */}
			<Paper h={2337} w={768} bg={"#F4F4F4"} pt={30} hiddenFrom="md" visibleFrom="xs">
				<Text fz={28} fw={600} pt={56} ml={90}>
					My Wishlist (3 items)
				</Text>
				<Card withBorder h={464} w={588} ml={90} mt={32}>
					<Grid>
						<Grid.Col span={6}>
							<Text fz={16} c="#414141" mt={16} w={294} fw={600} ml={30}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text fz={16} c="#E83214" mt={4} w={294} fw={600} ml={30}>
								POW-3-PA-CL{" "}
							</Text>
							<Text fz={10} ml={30} mt={16} c={"#828282"}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text ml={30} fz={24} fw={400} c="#414141">
								₹12,600 – ₹14,700
							</Text>
						</Grid.Col>
						<Grid.Col span={6}>
							<Image src={CardIpad} mt={26} w={175} h={134} ml={42} />
						</Grid.Col>
					</Grid>
					<Divider size={"xs"} ml={16} w={510} mt={40} />

					<List w={518} c={"#555459"} fz={11} mt={16} fw={400} lh={"160%"} ml={16}>
						<List.Item>
							Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
						</List.Item>
						<List.Item>
							3 Wire Close or Open Delta Configurations with Current Control/Current Limit and Over
							Load Protection.
						</List.Item>
					</List>
					<Text fw={700} fz={10} c={"#555459"} ta={"right"} mt={16} mr={36}>
						{<IconCheck size="10px" />}
						In Stock
					</Text>
					<Paper w={524} mt={8} withBorder h={57} ml={16}>
						<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
							{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
						</Text>
						<UnstyledButton ml={27} fz={10} c={"blue"} td={"underline"}>
							View More
						</UnstyledButton>
					</Paper>
					<Group ml={16} pt={25}>
						<PrimaryButton w={258}>ADD TO WISHLIST</PrimaryButton>
						<OptionsButton w={258}>Select Options</OptionsButton>
					</Group>
				</Card>
				<Card withBorder h={464} w={588} ml={90} mt={32}>
					<Grid>
						<Grid.Col span={6}>
							<Text fz={16} c="#414141" mt={16} w={294} fw={600} ml={30}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text fz={16} c="#E83214" mt={4} w={294} fw={600} ml={30}>
								POW-3-PA-CL{" "}
							</Text>
							<Text fz={10} ml={30} mt={16} c={"#828282"}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text ml={30} fz={24} fw={400} c="#414141">
								₹12,600 – ₹14,700
							</Text>
						</Grid.Col>
						<Grid.Col span={6}>
							<Image src={CardIpad} mt={26} w={175} h={134} ml={42} />
						</Grid.Col>
					</Grid>
					<Divider size={"xs"} ml={16} w={510} mt={40} />

					<List w={518} c={"#555459"} fz={11} mt={16} fw={400} lh={"160%"} ml={16}>
						<List.Item>
							Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
						</List.Item>
						<List.Item>
							3 Wire Close or Open Delta Configurations with Current Control/Current Limit and Over
							Load Protection.
						</List.Item>
					</List>
					<Text fw={700} fz={10} c={"#555459"} ta={"right"} mt={16} mr={36}>
						{<IconCheck size="10px" />}
						In Stock
					</Text>
					<Paper w={524} mt={8} withBorder h={57} ml={16}>
						<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
							{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
						</Text>
						<UnstyledButton ml={27} fz={10} c={"blue"} td={"underline"}>
							View More
						</UnstyledButton>
					</Paper>
					<Group ml={16} pt={25}>
						<PrimaryButton w={258}>ADD TO WISHLIST</PrimaryButton>
						<OptionsButton w={258}>Select Options</OptionsButton>
					</Group>
				</Card>
				<Card withBorder h={464} w={588} ml={90} mt={32}>
					<Grid>
						<Grid.Col span={6}>
							<Text fz={16} c="#414141" mt={16} w={294} fw={600} ml={30}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text fz={16} c="#E83214" mt={4} w={294} fw={600} ml={30}>
								POW-3-PA-CL{" "}
							</Text>
							<Text fz={10} ml={30} mt={16} c={"#828282"}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text ml={30} fz={24} fw={400} c="#414141">
								₹12,600 – ₹14,700
							</Text>
						</Grid.Col>
						<Grid.Col span={6}>
							<Image src={CardIpad} mt={26} w={175} h={134} ml={42} />
						</Grid.Col>
					</Grid>
					<Divider size={"xs"} ml={16} w={510} mt={40} />

					<List w={518} c={"#555459"} fz={11} mt={16} fw={400} lh={"160%"} ml={16}>
						<List.Item>
							Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
						</List.Item>
						<List.Item>
							3 Wire Close or Open Delta Configurations with Current Control/Current Limit and Over
							Load Protection.
						</List.Item>
					</List>
					<Text fw={700} fz={10} c={"#555459"} ta={"right"} mt={16} mr={36}>
						{<IconCheck size="10px" />}
						In Stock
					</Text>
					<Paper w={524} mt={8} withBorder h={57} ml={16}>
						<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
							{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
						</Text>
						<UnstyledButton ml={27} fz={10} c={"blue"} td={"underline"}>
							View More
						</UnstyledButton>
					</Paper>
					<Group ml={16} pt={25}>
						<PrimaryButton w={258}>ADD TO WISHLIST</PrimaryButton>
						<OptionsButton w={258}>Select Options</OptionsButton>
					</Group>
				</Card>
				<Card withBorder h={464} w={588} ml={90} mt={32}>
					<Grid>
						<Grid.Col span={6}>
							<Text fz={16} c="#414141" mt={16} w={294} fw={600} ml={30}>
								Three Phase Thyristor Power Controller
							</Text>
							<Text fz={16} c="#E83214" mt={4} w={294} fw={600} ml={30}>
								POW-3-PA-CL{" "}
							</Text>
							<Text fz={10} ml={30} mt={16} c={"#828282"}>
								Prices are inclusive of Delivery Charges.
							</Text>
							<Text ml={30} fz={24} fw={400} c="#414141">
								₹12,600 – ₹14,700
							</Text>
						</Grid.Col>
						<Grid.Col span={6}>
							<Image src={CardIpad} mt={26} w={175} h={134} ml={42} />
						</Grid.Col>
					</Grid>
					<Divider size={"xs"} ml={16} w={510} mt={40} />

					<List w={518} c={"#555459"} fz={11} mt={16} fw={400} lh={"160%"} ml={16}>
						<List.Item>
							Three Phase SCR Power Regulator for Three Phase Heater connected in 3 or 4 Wire Star
						</List.Item>
						<List.Item>
							3 Wire Close or Open Delta Configurations with Current Control/Current Limit and Over
							Load Protection.
						</List.Item>
					</List>
					<Text fw={700} fz={10} c={"#555459"} ta={"right"} mt={16} mr={36}>
						{<IconCheck size="10px" />}
						In Stock
					</Text>
					<Paper w={524} mt={8} withBorder h={57} ml={16}>
						<Text fz={10} mt={8} ml={8} lineClamp={1} c={"#555459"}>
							{<IconCoin size={12} />} Get 5% Instant Discount Up to ₹1250 On Leading Bank Cards EMI{" "}
						</Text>
						<UnstyledButton ml={27} fz={10} c={"blue"} td={"underline"}>
							View More
						</UnstyledButton>
					</Paper>
					<Group ml={16} pt={25}>
						<PrimaryButton w={258}>ADD TO WISHLIST</PrimaryButton>
						<OptionsButton w={258}>Select Options</OptionsButton>
					</Group>
				</Card>
			</Paper>
		</>
	);
};

export default Wishlist;
