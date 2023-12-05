import {
	Paper,
	Group,
	Checkbox,
	UnstyledButton,
	Divider,
	Stack,
	ActionIcon,
	rem,
	Text,
	Image,
	Button,
	ButtonProps,
	Card,
	Grid,
} from "@mantine/core";
import { IconHeart, IconMinus, IconPlus, IconTag, IconTrash } from "@tabler/icons-react";
import React from "react";
import Panel from "./Assets/panel.png";
import WhoAreWe from "./Whoarewe/WhoAreWe";

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
			},
			label: {
				color: "#FFFFFF",
			},
		}}
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
			},
			label: {
				color: "#555459",
			},
		}}
		{...props}
	/>
);

const CartPage = (props: Props) => {
	return (
		<>
			{/* <Paper w={{ base: 360, lg: 1440 }} h={{ base: 900, lg: 778 }} mt={30}>
				<Text fz={{ base: 20, lg: 34 }} fw={600} c={"#262728"} ml={{ base: 16, lg: 144 }}>
					Cart
				</Text>
				<Group ml={{ base: 16, lg: 144 }}>
					<Checkbox
						size={"16px"}
						fw={600}
						defaultChecked
						label="3/3 Items Selected"
						mt={{ base: 23, lg: 27 }}
						c="#212121"
					/>
					<UnstyledButton mt={27} ml={324} visibleFrom="md">
						<Text fz={12} c="#777" fw={400}>
							REMOVE
						</Text>
					</UnstyledButton>
					<UnstyledButton mt={27} ml={70} hiddenFrom="xs">
						<IconTrash />
					</UnstyledButton>
					<Divider orientation="vertical" size={"md"} mt={27} visibleFrom="md" />
					<UnstyledButton mt={27} visibleFrom="md">
						<Text c="#777" fz={12} fw={400}>
							MOVE TO WISHLIST
						</Text>
					</UnstyledButton>
					<UnstyledButton mt={27} hiddenFrom="xs">
						<IconHeart />
					</UnstyledButton>
				</Group>
				<Card
					w={{ base: 328, lg: 713 }}
					h={{ base: 244, lg: 155 }}
					ml={{ base: 16, lg: 144 }}
					mt={{ base: 24, lg: 48 }}
					withBorder
				>
					<Grid>
						<Grid.Col span={{ base: 12, lg: 3 }} w={370}>
							<Group>
								<Checkbox defaultChecked c="#212121" size="16px" />
								<Image src={Panel} h={98} w={75} mt={18} style={{ background: "#F1F1F1" }} />
								<Stack>
									<Text w={104} c="#414141" fz={14} fw={600} ml={11} mt={20}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={11}>
										POW-3-PA-CL
									</Text>
								</Stack>
							</Group>
						</Grid.Col>
						<Grid.Col span={{ base: 12, lg: 3 }}>
							<Stack>
								<Text fz={12} fw={600} c={"#424242"} mt={20}>
									PRICE
								</Text>
								<Text c="#262728" fw={700} size="sm">
									₹12,600
								</Text>
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, lg: 3 }}>
							<Stack>
								<Text fz={12} fw={600} c={"#424242"} mt={20}>
									PRICE
								</Text>
								<Text c="#262728" fw={700} size="sm">
									₹12,600
								</Text>
							</Stack>
						</Grid.Col>
						<Grid.Col span={{ base: 12, lg: 3 }}>
							<Stack>
								<Text fz={12} fw={600} c={"#424242"} mt={20}>
									PRICE
								</Text>
								<Text c="#262728" fw={700} size="sm">
									₹12,600
								</Text>
							</Stack>
						</Grid.Col>
					</Grid>
				</Card>

				<Text fz={12} fw={600} c={"#424242"} mt={27} ml={49}>
					APPLY COUPON
				</Text>

				<PrimaryButton h={27} mt={22} ml={257}>
					<Text fz={12}>Apply</Text>
				</PrimaryButton>
			</Paper> */}

			<Paper w={1440} h={784} mt={30} visibleFrom="md">
				<Text fz={34} fw={600} c={"#262728"} mt={123} ml={114}>
					Cart
				</Text>
				<Group>
					<Checkbox
						size={"16px"}
						fw={600}
						defaultChecked
						label="3/3 Items Selected"
						ml={114}
						mt={27}
						c="#212121"
					/>
					<UnstyledButton mt={27} ml={324}>
						<Text fz={12} c="#777" fw={400}>
							REMOVE
						</Text>
					</UnstyledButton>
					<Divider orientation="vertical" size={"md"} mt={27} />
					<UnstyledButton mt={27}>
						<Text c="#777" fz={12} fw={400}>
							MOVE TO WISHLIST
						</Text>
					</UnstyledButton>

					<Text fz={12} fw={600} c={"#424242"} mt={27} ml={49}>
						APPLY COUPON
					</Text>

					<PrimaryButton h={27} mt={22} ml={257}>
						<Text fz={12}>Apply</Text>
					</PrimaryButton>
				</Group>
				<Divider orientation="horizontal" size={"sm"} mt={18} ml={114} mr={613} />
				<Divider orientation="horizontal" size={"sm"} ml={875} mr={114} />
				<Group>
					<Stack>
						<Group ml={114} mt={17}>
							<Text fz={12} fw={600} c={"#424242"}>
								PRODUCT
							</Text>
							<Text fz={12} fw={600} c={"#424242"} ml={300}>
								PRICE
							</Text>
							<Text fz={12} fw={600} c={"#424242"} ml={64}>
								QUANTITY
							</Text>
							<Text fz={12} fw={600} c={"#424242"} ml={64}>
								SUBTOTAL
							</Text>
						</Group>
						<Paper withBorder w={713} h={155} ml={114} mt={14}>
							<Group align="flex-start" ml={8} gap={"lg"}>
								<Checkbox defaultChecked ml={8} c="#212121" size="16px" mt={66} />
								<Image
									src={Panel}
									h={98}
									w={75}
									mt={27}
									ml={25}
									style={{ background: "#F1F1F1" }}
								/>
								<Stack gap={"xs"} mt={52}>
									<Text w={164} c="#414141" fz={14} fw={600} ml={11}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={11}>
										POW-3-PA-CL
									</Text>
								</Stack>
								<Text c="#262728" fw={700} size="sm" mt={68}>
									₹12,600
								</Text>

								<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={65}>
									<IconMinus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>

								<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
									<IconPlus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>
								<Text c="#262728" fw={700} size="sm" ml={70} mt={68}>
									₹12,600
								</Text>
							</Group>
						</Paper>
						<Paper withBorder w={713} h={155} ml={114} mt={24}>
							<Group align="flex-start" ml={8} gap={"lg"}>
								<Checkbox defaultChecked ml={8} c="#212121" size="16px" mt={66} />
								<Image
									src={Panel}
									h={98}
									w={75}
									mt={27}
									ml={25}
									style={{ background: "#F1F1F1" }}
								/>
								<Stack gap={"xs"} mt={52}>
									<Text w={164} c="#414141" fz={14} fw={600} ml={11}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={11}>
										POW-3-PA-CL
									</Text>
								</Stack>
								<Text c="#262728" fw={700} size="sm" mt={68}>
									₹12,600
								</Text>

								<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={65}>
									<IconMinus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>

								<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
									<IconPlus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>
								<Text c="#262728" fw={700} size="sm" ml={70} mt={68}>
									₹12,600
								</Text>
							</Group>
						</Paper>
						<Paper withBorder w={713} h={155} ml={114} mt={24}>
							<Group align="flex-start" ml={8} gap={"lg"}>
								<Checkbox defaultChecked ml={8} c="#212121" size="16px" mt={66} />
								<Image
									src={Panel}
									h={98}
									w={75}
									mt={27}
									ml={25}
									style={{ background: "#F1F1F1" }}
								/>
								<Stack gap={"xs"} mt={52}>
									<Text w={164} c="#414141" fz={14} fw={600} ml={11}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={11}>
										POW-3-PA-CL
									</Text>
								</Stack>
								<Text c="#262728" fw={700} size="sm" mt={68}>
									₹12,600
								</Text>

								<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={65}>
									<IconMinus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>

								<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
									<IconPlus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>
								<Text c="#262728" fw={700} size="sm" ml={70} mt={68}>
									₹12,600
								</Text>
							</Group>
						</Paper>
					</Stack>
					<Paper withBorder w={451} h={301} ml={48} bg={"#f4f4f4"}>
						<Stack>
							<Text c="#212121" fz={16} fw={600} ml={24} mt={24}>
								Cart Summary
							</Text>
							<Group>
								<Text c="#616161" fz={14} fw={600} ml={24} w={57}>
									Subtotal
								</Text>
								<Text c="#3E3E3E" fz={14} fw={700} ml={280} w={51}>
									₹37000
								</Text>
							</Group>
							<Group mt={20}>
								<Text c="#616161" fz={14} fw={600} ml={24} w={57}>
									Shipping:
								</Text>
								<Text c="#3E3E3E" fz={14} fw={700} ml={280} w={51}>
									₹500
								</Text>
							</Group>
							<Divider size={"md"} mx={20}></Divider>
							<Group>
								<Text c="#212121" fz={16} fw={600} ml={24}>
									Total Amount
								</Text>
								<Text c="#3E3E3E" size="sm" fw={700} ml={235}>
									₹37500
								</Text>
							</Group>
						</Stack>
						<Stack align="stretch" ml={16} mr={16}>
							<OptionsButton mt={18} tt={"uppercase"}>
								<Text c="#fff" size="xs" fw={600}>
									proceed to checkout
								</Text>
							</OptionsButton>
							<UnstyledButton>
								<Text c="#3e3e3e" size="xs" fw={600} ml={145}>
									CONTINUE SHOPPING
								</Text>
							</UnstyledButton>
						</Stack>
					</Paper>
				</Group>
			</Paper>

			{/**Mobile View */}
			<Paper w={360} h={784} mt={30} hiddenFrom="xs">
				<Text fz={20} fw={600} c={"#262728"} mt={24} ml={16}>
					Cart
				</Text>
				<Group gap={0}>
					<Checkbox
						fz={14}
						size="14px"
						fw={600}
						defaultChecked
						label="3/3 Items Selected"
						ml={16}
						mt={27}
						c="#212121"
					/>
					<IconTrash style={{ marginTop: 27, marginLeft: 102 }} />
					<IconHeart style={{ marginTop: 27, marginLeft: 18 }} />
				</Group>
				<Divider orientation="horizontal" size={"xs"} mt={18} />

				<Paper withBorder w={328} h={244} ml={16} mt={14}>
					<Stack>
						<Group align="flex-start">
							<Checkbox defaultChecked ml={8} c="#212121" size="16px" mt={49} />
							<Image src={Panel} h={98} w={90} mt={16} style={{ background: "#F1F1F1" }} />
							<Stack gap={"xs"} mt={29}>
								<Text w={164} c="#414141" fz={14} fw={600} ml={11}>
									Three Phase Thyristor Power Controller
								</Text>
								<Text c="#e83214" fz={12} fw={600} ml={11}>
									POW-3-PA-CL
								</Text>
							</Stack>
						</Group>
						<Group ml={39}>
							<Text c="#262728" w={61} fw={700} fz={14}>
								PRICE
							</Text>
							<Text c="#262728" w={61} fw={700} fz={14} ml={51}>
								₹12,600
							</Text>
						</Group>
						<Group ml={39}>
							<Text c="#262728" w={61} fw={700} fz={14}>
								QUANTITY
							</Text>
							<Text c="#262728" fw={700} fz={14} ml={51}>
								₹12,600
							</Text>
						</Group>
						<Group ml={39}>
							<Text c="#262728" w={61} fw={700} fz={14}>
								SUBTOTAL
							</Text>
							<Text c="#262728" fw={700} fz={14} ml={51}>
								₹12,600
							</Text>
						</Group>
					</Stack>
				</Paper>

				<Paper w={328} h={38} mt={18} ml={16} bg={"#EFEFEF"}>
					<Group>
						<IconTag size={20} style={{ marginTop: 4, marginLeft: 8 }} />
						<Text fz={14} c={"#424242"} mt={8}>
							APPLY COUPONS
						</Text>
						<PrimaryButton bg={"#EFEFEF"} w={77} h={26} mt={6} ml={71}>
							<Text fz={12} ta={"center"}>
								Apply
							</Text>
						</PrimaryButton>
					</Group>
				</Paper>

				<Paper withBorder w={328} mt={24} h={301} ml={16} bg={"#f4f4f4"}>
					<Stack>
						<Text c="#212121" fz={14} fw={600} ml={16} mt={16}>
							Cart Summary
						</Text>
						<Group justify="flex-start">
							<Text c="#616161" fz={12} fw={600} ml={16} w={49}>
								Subtotal
							</Text>
							<Text c="#3E3E3E" fz={12} ml={180} fw={700} w={24}>
								₹37000
							</Text>
						</Group>
						<Group>
							<Text c="#616161" fz={12} fw={600} ml={16}>
								Shipping:
							</Text>
							<Text c="#3E3E3E" fz={12} fw={700} ml={30} w={191} ta={"end"}>
								Shipping costs are calculated during the checkout
							</Text>
						</Group>
						<Divider size={"sm"} mx={20}></Divider>
						<Group>
							<Text c="#212121" fz={16} fw={600} ml={16}>
								Total Amount
							</Text>
							<Text c="#3E3E3E" fz={14} ml={110} fw={700}>
								₹37500
							</Text>
						</Group>
						<OptionsButton mt={18} tt={"uppercase"} mx={16}>
							<Text c="#fff" size="xs" fw={600}>
								proceed to checkout
							</Text>
						</OptionsButton>
						<UnstyledButton ml={102}>
							<Text c="#3e3e3e" size="xs" fw={600}>
								CONTINUE SHOPPING
							</Text>
						</UnstyledButton>
					</Stack>
				</Paper>
			</Paper>

			{/**Tablet */}
			<Paper w={768} h={1084} mt={30} visibleFrom="xs" hiddenFrom="md">
				<Text fz={34} fw={600} c={"#262728"} mt={123} ml={90}>
					Cart
				</Text>
				<Group>
					<Checkbox
						fz={16}
						fw={600}
						defaultChecked
						label="3/3 Items Selected"
						ml={90}
						mt={27}
						c="#212121"
					/>
					<UnstyledButton mt={27} ml={200}>
						<Text fz={12} c="#777" fw={400}>
							REMOVE
						</Text>
					</UnstyledButton>
					<Divider orientation="vertical" size={"md"} mt={27} />
					<UnstyledButton mt={27}>
						<Text c="#777" fz={12} fw={400}>
							MOVE TO WISHLIST
						</Text>
					</UnstyledButton>
				</Group>
				<Divider orientation="horizontal" size={"sm"} mt={18} ml={90} w={588} />

				<Group>
					<Stack>
						<Group ml={90} mt={17}>
							<Text fz={12} fw={600} c={"#424242"}>
								PRODUCT
							</Text>
							<Text fz={12} fw={600} c={"#424242"} ml={230}>
								PRICE
							</Text>
							<Text fz={12} fw={600} c={"#424242"} ml={50}>
								QUANTITY
							</Text>
							<Text fz={12} fw={600} c={"#424242"} ml={30}>
								SUBTOTAL
							</Text>
						</Group>
						<Paper withBorder w={588} h={155} ml={90} mt={14}>
							<Group align="flex-start" ml={8} gap={0}>
								<Checkbox defaultChecked c="#212121" size="16px" mt={66} ml={8} />
								<Image
									src={Panel}
									h={98}
									w={75}
									mt={27}
									ml={12}
									style={{ background: "#F1F1F1" }}
								/>
								<Stack gap={"xs"} mt={27}>
									<Text w={134} c="#414141" fz={14} fw={600} ml={30}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={30}>
										POW-3-PA-CL
									</Text>
								</Stack>
								<Text c="#262728" ml={16} fw={700} size="sm" mt={68}>
									₹12,600
								</Text>

								<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={60}>
									<IconMinus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>

								<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
									<IconPlus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>
								<Text c="#262728" fw={700} size="sm" ml={70} mt={68}>
									₹12,600
								</Text>
							</Group>
						</Paper>
						<Paper withBorder w={588} h={155} ml={90} mt={14}>
							<Group align="flex-start" ml={8} gap={0}>
								<Checkbox defaultChecked c="#212121" size="16px" mt={66} ml={8} />
								<Image
									src={Panel}
									h={98}
									w={75}
									mt={27}
									ml={12}
									style={{ background: "#F1F1F1" }}
								/>
								<Stack gap={"xs"} mt={27}>
									<Text w={134} c="#414141" fz={14} fw={600} ml={30}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={30}>
										POW-3-PA-CL
									</Text>
								</Stack>
								<Text c="#262728" ml={16} fw={700} size="sm" mt={68}>
									₹12,600
								</Text>

								<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={60}>
									<IconMinus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>

								<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
									<IconPlus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>
								<Text c="#262728" fw={700} size="sm" ml={70} mt={68}>
									₹12,600
								</Text>
							</Group>
						</Paper>
						<Paper withBorder w={588} h={155} ml={90} mt={14}>
							<Group align="flex-start" ml={8} gap={0}>
								<Checkbox defaultChecked c="#212121" size="16px" mt={66} ml={8} />
								<Image
									src={Panel}
									h={98}
									w={75}
									mt={27}
									ml={12}
									style={{ background: "#F1F1F1" }}
								/>
								<Stack gap={"xs"} mt={27}>
									<Text w={134} c="#414141" fz={14} fw={600} ml={30}>
										Three Phase Thyristor Power Controller
									</Text>
									<Text c="#e83214" fz={12} fw={600} ml={30}>
										POW-3-PA-CL
									</Text>
								</Stack>
								<Text c="#262728" ml={16} fw={700} size="sm" mt={68}>
									₹12,600
								</Text>

								<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={60}>
									<IconMinus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>

								<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
									<IconPlus style={{ width: rem(12) }} stroke={1.5} />
								</ActionIcon>
								<Text c="#262728" fw={700} size="sm" ml={70} mt={68}>
									₹12,600
								</Text>
							</Group>
						</Paper>
					</Stack>
					<Paper withBorder w={588} mt={30} h={350} ml={90} bg={"#f4f4f4"}>
						<Stack>
							<Text c={"#212121"} fz={16} fw={600} ml={30} mt={24}>
								Cart Summary
							</Text>
							<Group>
								<Text c={"#616161"} fz={14} fw={600} mt={18} ml={30} w={57}>
									Subtotal
								</Text>
								<Text c="#3E3E3E" fz={14} fw={700} mt={18} ml={391} w={51}>
									₹37000
								</Text>
							</Group>
							<Group mt={20}>
								<Text c={"#616161"} fz={14} fw={600} ml={30} w={57}>
									Shipping:
								</Text>
								<Text c={"#3E3E3E"} fz={14} fw={700} ml={391} w={51}>
									₹500
								</Text>
							</Group>
							<Divider size={"sm"} mx={20}></Divider>
							<Group>
								<Text c={"#212121"} fz={16} fw={600} ml={30}>
									Total Amount
								</Text>
								<Text c={"#3E3E3E"} fz={16} fw={700} ml={340}>
									₹37500
								</Text>
							</Group>
						</Stack>
						<Stack align="center">
							<OptionsButton w={419} h={40} mt={30} tt={"uppercase"}>
								<Text c="#fff" fz={12} fw={600}>
									proceed to checkout
								</Text>
							</OptionsButton>
							<UnstyledButton>
								<Text c="#3e3e3e" fz={12} w={419} fw={600} mt={10} ml={290}>
									CONTINUE SHOPPING
								</Text>
							</UnstyledButton>
						</Stack>
					</Paper>
				</Group>
			</Paper>
		</>
	);
};

export default CartPage;
