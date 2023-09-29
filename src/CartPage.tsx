import {
	Paper,
	Box,
	Group,
	Checkbox,
	UnstyledButton,
	Divider,
	Grid,
	Stack,
	ActionIcon,
	rem,
	Container,
	// Col,
	TextInput,
	Anchor,
	Text,
	Image,
	Button,
	ButtonProps,
} from "@mantine/core";
import {
	IconTag,
	IconMinus,
	IconPlus,
	IconBrandFacebookFilled,
	IconBrandLinkedin,
	IconBrandTwitterFilled,
	IconBrandYoutubeFilled,
	IconBrandWhatsapp,
} from "@tabler/icons-react";
import React from "react";
import CartBg from "./Assets/cartrectangle.png";
import Panel from "./Assets/panel.png";
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

const CartPage = (props: Props) => {
	return (
		<Paper w={1440} h={1784} withBorder mt={50}>
			<Box ml={114}>
				<Text color="#262728" size="xl" fw={600} mt={123}>
					Cart
				</Text>
				<Group>
					<Checkbox defaultChecked label="3/3 Items Selected" mt={27} color="#212121" size="sm" />
					<UnstyledButton mt={27} ml={274}>
						<Text color="#777">REMOVE</Text>
					</UnstyledButton>
					<Divider orientation="vertical" size={"md"} mt={27} />
					<UnstyledButton mt={27}>
						<Text color="#777">MOVE TO WISHLIST</Text>
					</UnstyledButton>
					<Text mt={27} ml={51}>
						<IconTag width={20} height={20}></IconTag>
						APPLY COUPONS
					</Text>
					<PrimaryButton mt={27} ml={157}>
						Apply
					</PrimaryButton>
				</Group>
			</Box>
			<Divider orientation="horizontal" size={"md"} mt={18} ml={114} mr={613} />
			<Divider orientation="horizontal" size={"md"} ml={875} mr={114} />
			<Grid mt={-52}>
				<Grid.Col span={7}>
					<Group ml={114} mt={82} gap={"lg"}>
						<Text size="xs" color="#424242" fw={600}>
							PRODUCT
						</Text>
						<Text size="xs" color="#424242" fw={600} ml={310}>
							PRICE
						</Text>
						<Text size="xs" color="#424242" fw={600} ml={64}>
							QUANTITY
						</Text>
						<Text size="xs" color="#424242" fw={600} ml={34}>
							SUBTOTAL
						</Text>
					</Group>
					<Paper w={713} h={155} withBorder ml={114} mt={14}>
						<Group align="flex-start" ml={8} gap={"lg"}>
							<Checkbox defaultChecked ml={8} color="#212121" size="sm" mt={66} />
							<Image src={CartBg} height={106} width={106} mt={23} ml={10} />
							<Image src={Panel} height={98} width={75} mt={27} ml={-106} />
							<Stack gap={"xs"} mt={52}>
								<Text w={164} color="#414141" size="sm" fw={600} ml={11}>
									Three Phase Thyristor Power Controller
								</Text>
								<Text color="#e83214" size="xs" fw={600} ml={11}>
									POW-3-PA-CL
								</Text>
							</Stack>
							<Text color="#262728" fw={700} size="sm" ml={30} mt={68}>
								₹12,600
							</Text>

							<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={45}>
								<IconMinus style={{ width: rem(12) }} stroke={1.5} />
							</ActionIcon>

							<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
								<IconPlus style={{ width: rem(12) }} stroke={1.5} />
							</ActionIcon>
							<Text color="#262728" fw={700} size="sm" ml={30} mt={68}>
								₹12,600
							</Text>
						</Group>
					</Paper>
					<Paper w={713} h={155} withBorder ml={114} mt={24}>
						<Group align="flex-start" ml={8} gap={"lg"}>
							<Checkbox defaultChecked ml={8} color="#212121" size="sm" mt={66} />
							<Image src={CartBg} height={106} width={106} mt={23} ml={10} />
							<Image src={Panel} height={98} width={75} mt={27} ml={-106} />
							<Stack gap={"xs"} mt={52}>
								<Text w={164} color="#414141" size="sm" fw={600} ml={11}>
									Three Phase Thyristor Power Controller
								</Text>
								<Text color="#e83214" size="xs" fw={600} ml={11}>
									POW-3-PA-CL
								</Text>
							</Stack>
							<Text color="#262728" fw={700} size="sm" ml={30} mt={68}>
								₹12,600
							</Text>

							<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={45}>
								<IconMinus style={{ width: rem(12) }} stroke={1.5} />
							</ActionIcon>

							<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
								<IconPlus style={{ width: rem(12) }} stroke={1.5} />
							</ActionIcon>

							<Text color="#262728" fw={700} size="sm" ml={30} mt={68}>
								₹12,600
							</Text>
						</Group>
					</Paper>
					<Paper w={713} h={155} withBorder ml={114} mt={24}>
						<Group align="flex-start" ml={8} gap={"lg"}>
							<Checkbox defaultChecked ml={8} color="#212121" size="sm" mt={66} />
							<Image src={CartBg} height={106} width={106} mt={23} ml={10} />
							<Image src={Panel} height={98} width={75} mt={27} ml={-106} />
							<Stack gap={"xs"} mt={52}>
								<Text w={164} color="#414141" size="sm" fw={600} ml={11}>
									Three Phase Thyristor Power Controller
								</Text>
								<Text color="#e83214" size="xs" fw={600} ml={11}>
									POW-3-PA-CL
								</Text>
							</Stack>
							<Text color="#262728" fw={700} size="sm" ml={30} mt={68}>
								₹12,600
							</Text>

							<ActionIcon variant="default" size="xs" aria-label="Minus" mt={67} ml={45}>
								<IconMinus style={{ width: rem(12) }} stroke={1.5} />
							</ActionIcon>

							<ActionIcon variant="default" size="xs" aria-label="Plus" mt={67}>
								<IconPlus style={{ width: rem(12) }} stroke={1.5} />
							</ActionIcon>
							<Text color="#262728" fw={700} size="sm" ml={30} mt={68}>
								₹12,600
							</Text>
						</Group>
					</Paper>
				</Grid.Col>
				<Grid.Col span={3}>
					<Paper w={451} h={310} withBorder mt={86} ml={48} bg={"#f4f4f4"}>
						<Stack>
							<Text color="#212121" size="sm" fw={600} ml={24} mt={24}>
								Cart Summary
							</Text>
							<Group>
								<Text color="#616161" size="sm" fw={600} ml={24} w={57}>
									Subtotal
								</Text>
								<Text color="#3E3E3E" size="sm" fw={700} ml={280} w={51}>
									₹37000
								</Text>
							</Group>
							<Group mt={20}>
								<Text color="#616161" size="sm" fw={600} ml={24} w={57}>
									Shipping:
								</Text>
								<Text color="#3E3E3E" size="sm" fw={700} ml={280} w={51}>
									₹500
								</Text>
							</Group>
							<Divider></Divider>
							<Group>
								<Text color="#212121" size="sm" fw={600} ml={24}>
									Total Amount
								</Text>
								<Text color="#3E3E3E" size="sm" fw={700} ml={235}>
									₹37500
								</Text>
							</Group>
						</Stack>
						<Stack align="stretch" ml={16} mr={16}>
							<OptionsButton mt={18}>
								<Text color="#fff" size="xs" fw={600}>
									proceed to checkout
								</Text>
							</OptionsButton>
							<UnstyledButton>
								<Text color="#3e3e3e" size="xs" fw={600} ml={145}>
									CONTINUE SHOPPING
								</Text>
							</UnstyledButton>
						</Stack>
					</Paper>
				</Grid.Col>
			</Grid>
			<Box
				style={{
					backgroundColor: "#F5C44E",
					height: 312,
					width: 1312,
					marginLeft: 64,
					marginTop: 150,
				}}
			>
				<Text color="#292929" size="xl" fw={600} pt={40} ml={80}>
					REQUEST A CALL BACK
				</Text>

				<Text color="#292929" size="sm" fw={400} pt={12} ml={80}>
					Connect with us to know more about our new products, sales and launches!
				</Text>
				<Container pos={"absolute"} pl={80} pt={12}>
					<Grid>
						<Grid.Col span={3}>
							<TextInput
								label="First name"
								variant="unstyled"
								style={{
									border: "none",
									borderBottom: "1px solid #000",
								}}
							/>
						</Grid.Col>
						<Grid.Col span={3}>
							<TextInput
								label="Last name"
								variant="unstyled"
								style={{
									border: "none",
									borderBottom: "1px solid #000",
								}}
							/>
						</Grid.Col>
						<Grid.Col span={3}>
							<TextInput
								label="Email"
								variant="unstyled"
								style={{
									border: "none",
									borderBottom: "1px solid #000",
								}}
							/>
						</Grid.Col>
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
					<Text size="sm" fw={700} mt={64} ml={144}>
						USEFUL LINKS
					</Text>
					<Text size="sm" fw={400} mt={30} ml={144} color="#555459">
						Careers
					</Text>
					<Text size="sm" fw={400} mt={14} ml={144} color="#555459">
						Terms of Service
					</Text>
					<Text size="sm" fw={700} mt={30} ml={144}>
						WE ARE SOCIAL!
					</Text>
					<Text size="sm" fw={400} mt={30} ml={144} color="#555459">
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
					<Text size="sm" fw={700} mt={64} ml={144}>
						POLICIES
					</Text>
					<Text size="sm" fw={400} mt={30} ml={144} color="#555459">
						Quality Policy
					</Text>
					<Text size="sm" fw={400} mt={10} ml={144} color="#555459">
						Privacy Policy
					</Text>
					<Text size="sm" fw={400} mt={10} ml={144} color="#555459">
						Shipping Policy
					</Text>
					<Text size="sm" fw={400} mt={10} ml={144} color="#555459">
						Cancellation Policy
					</Text>

					<Text size="sm" fw={400} mt={10} ml={144} color="#555459">
						Return & Refund Policy
					</Text>
				</Stack>
				<Stack>
					<Text size="sm" fw={700} mt={64} ml={144}>
						WAYS TO CONNECT
					</Text>
					<Text size="sm" fw={400} mt={30} ml={144} color="#555459">
						Email: <br />
						<Anchor>
							enquiry@libratherm.com, <br />
							libratherm@libratherm.com
						</Anchor>
					</Text>
					<Text size="sm" fw={400} mt={10} ml={144} color="#555459">
						Mobile: <br />
						<Anchor>
							+91-8104971152 +91-8104971154, <br />
							+91-9082687279, +91-9821136685
						</Anchor>
					</Text>

					<Text size="sm" fw={400} mt={10} ml={144} color="#555459">
						Landline: <br />
						<Anchor>+91-22-42555334</Anchor>
					</Text>
				</Stack>
				<Stack>
					<Text size="sm" fw={700} mt={64} ml={102}>
						OFFICE ADDRESS
					</Text>
					<Text size="sm" fw={400} mt={30} ml={102} color="#555459">
						401-403, Diamond Industrial <br /> Estate,Ketki Pada Road, Dahisar <br /> (East), Mumbai
						400068, <br /> Maharashtra, India.
					</Text>
					<OptionsButton ml={102} mt={26}>
						DOWNLOAD BROCHURE
					</OptionsButton>
					<PrimaryButton
						ml={102}
						mt={14}
						leftSection={<IconBrandWhatsapp color="#25D366" size={24} />}
						style={{
							paddingRight: "8px",
						}}
					>
						Get it on Whatsapp
					</PrimaryButton>
				</Stack>
			</Group>
		</Paper>
	);
};

export default CartPage;
