import {
	Paper,
	Box,
	Grid,
	TextInput,
	Checkbox,
	Group,
	Stack,
	Anchor,
	Text,
	Image,
} from "@mantine/core";
import {
	IconBrandFacebookFilled,
	IconBrandLinkedin,
	IconBrandTwitterFilled,
	IconBrandYoutubeFilled,
	IconBrandWhatsapp,
	IconBrandGooglePlay,
} from "@tabler/icons-react";
import React from "react";
import footer from "./Assets/footer.png";
import { OptionsButton, PrimaryButton } from "./BaseApp/App";
type Props = {};

const Footer = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={824} mt={220} visibleFrom="xs">
				<Box h={312} w={1312} ml={64} mt={130} bg={"#F5C44E"}>
					<Grid>
						<Grid.Col span={8}>
							<Text style={{ color: "#292929" }} fz={32} fw={600} pt={40} ml={80}>
								REQUEST A CALL BACK
							</Text>

							<Text style={{ color: "#292929" }} fz={14} fw={400} pt={12} ml={80}>
								Connect with us to know more about our new products, sales and launches!
							</Text>

							<Group gap={0}>
								<TextInput
									fz={14}
									w={174}
									fw={700}
									ml={80}
									mt={24}
									c={"#292929"}
									label="First name"
									variant="unstyled"
									style={{
										border: "none",
										borderBottom: "1px solid #000",
										width: "184px",
									}}
								/>
								<TextInput
									fz={14}
									w={174}
									fw={700}
									ml={40}
									mt={24}
									label="Last name"
									variant="unstyled"
									style={{
										border: "none",
										borderBottom: "1px solid #000",
										width: "184px",
									}}
								/>
								<TextInput
									w={174}
									fz={14}
									fw={700}
									ml={40}
									mt={24}
									label="Email"
									variant="unstyled"
									style={{
										border: "none",
										borderBottom: "1px solid #000",
										width: "184px",
									}}
								/>
							</Group>
							<Group>
								<Checkbox
									size={"12px"}
									fw={400}
									label="I’m happy to recieve marketing communications and agree to the data policy"
									w={303}
									ml={80}
									mt={27}
									c="#292929"
									styles={{
										input: {
											border: " 2px solid",
											borderColor: "#000",
											borderRadius: "0px",
											backgroundColor: "#F5C44E",
										},
									}}
								/>
								<OptionsButton w={138} mt={28} ml={113}>
									SEND
								</OptionsButton>
							</Group>
						</Grid.Col>
						<Grid.Col span={4}>
							<Image src={footer} w={454} h={368} ml={-100} mt={-57} pos={"absolute"} />
						</Grid.Col>
					</Grid>
				</Box>

				<Group>
					<Stack>
						<Text fz={14} fw={700} mt={64} ml={144}>
							USEFUL LINKS
						</Text>
						<Text fz={14} fw={400} mt={30} ml={144} style={{ color: "#555459" }}>
							Careers
						</Text>
						<Text fz={14} fw={400} mt={14} ml={144} style={{ color: "#555459" }}>
							Terms of Service
						</Text>
						<Text fz={14} fw={700} mt={30} ml={144}>
							WE ARE SOCIAL!
						</Text>
						<Text fz={14} fw={400} mt={30} ml={144} style={{ color: "#555459" }}>
							<Group>
								<IconBrandFacebookFilled size={24} style={{ color: "#555459" }} />
								<IconBrandLinkedin size={24} style={{ color: "#555459" }} />
								<IconBrandTwitterFilled size={24} style={{ color: "#555459" }} />
								<IconBrandYoutubeFilled size={24} style={{ color: "#555459" }} />
								<IconBrandWhatsapp size={24} style={{ color: "#555459" }} />
							</Group>
						</Text>
					</Stack>
					<Stack>
						<Text fz={14} fw={700} mt={64} ml={144}>
							POLICIES
						</Text>
						<Text fz={14} fw={400} mt={30} ml={144} style={{ color: "#555459" }}>
							Quality Policy
						</Text>
						<Text fz={14} fw={400} mt={10} ml={144} style={{ color: "#555459" }}>
							Privacy Policy
						</Text>
						<Text fz={14} fw={400} mt={10} ml={144} style={{ color: "#555459" }}>
							Shipping Policy
						</Text>
						<Text fz={14} fw={400} mt={10} ml={144} style={{ color: "#555459" }}>
							Cancellation Policy
						</Text>

						<Text fz={14} fw={400} mt={10} ml={144} style={{ color: "#555459" }}>
							Return & Refund Policy
						</Text>
					</Stack>
					<Stack>
						<Text fz={14} fw={700} mt={64} ml={144}>
							WAYS TO CONNECT
						</Text>
						<Text fz={14} fw={400} mt={30} ml={144} style={{ color: "#555459" }}>
							Email: <br />
							<Anchor>
								enquiry@libratherm.com, <br />
								libratherm@libratherm.com
							</Anchor>
						</Text>
						<Text fz={14} fw={400} mt={10} ml={144} style={{ color: "#555459" }}>
							Mobile: <br />
							<Anchor>
								+91-8104971152 +91-8104971154, <br />
								+91-9082687279, +91-9821136685
							</Anchor>
						</Text>

						<Text fz={14} fw={400} mt={10} ml={144} style={{ color: "#555459" }}>
							Landline: <br />
							<Anchor>+91-22-42555334</Anchor>
						</Text>
					</Stack>
					<Stack>
						<Text fz={14} fw={700} mt={64} ml={102}>
							OFFICE ADDRESS
						</Text>
						<Text fz={14} fw={400} mt={30} ml={102} style={{ color: "#555459" }}>
							401-403, Diamond Industrial <br /> Estate,Ketki Pada Road, Dahisar <br /> (East),
							Mumbai 400068, <br /> Maharashtra, India.
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

			{/**Mobile View */}

			<Box w={328} h={435} bg={"#F5C44E"} pos={"absolute"} ml={16} mt={-500} hiddenFrom="xs">
				<Stack>
					<Text fz={20} ml={24} mt={24} fw={600} c={"#292929"}>
						REQUEST A CALL BACK
					</Text>
					<Text fz={12} fw={400} ml={24}>
						Connect with us to know more about our new products, sales and launches!
					</Text>
					<TextInput
						w={279}
						ml={24}
						placeholder="First name"
						variant="unstyled"
						h={32}
						style={{
							border: "none",
							borderBottom: "1px solid #000",
						}}
						styles={{
							label: {
								color: "#292929",
								fontWeight: 700,
								fontSize: 12,
							},
						}}
					/>
					<TextInput
						w={279}
						h={32}
						ml={24}
						placeholder="Last Name"
						variant="unstyled"
						style={{
							border: "none",
							borderBottom: "1px solid #000",
						}}
						styles={{
							label: {
								color: "#292929",
								fontWeight: 700,
								fontSize: 12,
							},
						}}
					/>
					<TextInput
						w={279}
						h={32}
						ml={24}
						placeholder="Email"
						variant="unstyled"
						style={{
							border: "none",
							borderBottom: "1px solid #000",
						}}
						styles={{
							label: {
								color: "#292929",
								fontWeight: 700,
								fontSize: 12,
							},
						}}
					/>
					<Checkbox
						fz={12}
						fw={400}
						label="I’m happy to recieve marketing communications and agree to the data policy"
						w={255}
						ml={24}
						mt={17}
						c="#292929"
						styles={{
							input: {
								border: " 2px solid",
								borderColor: "#000",
								borderRadius: "0px",
								backgroundColor: "#F5C44E",
							},
						}}
					/>
					<OptionsButton w={279} ml={24} mt={10}>
						<Group>
							<Text>JOIN</Text>
							{<IconBrandGooglePlay size={16} />}
						</Group>
					</OptionsButton>
				</Stack>
			</Box>

			<Grid mt={249}>
				<Grid.Col span={6}>
					<Stack ml={16}>
						<Text fz={14} fw={700}>
							USEFUL LINKS
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Careers
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Terms of Service
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Careers
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Terms of Service
						</Text>
					</Stack>
				</Grid.Col>
				<Grid.Col span={6}>
					<Stack ml={20}>
						<Text fz={14} fw={700}>
							POLICIES
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Quality Policy
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Privacy Policy
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Shipping Policy
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Cancellation Policy
						</Text>
						<Text fz={12} c={"#555459"} fw={400}>
							Return & Refund Policy
						</Text>
					</Stack>
				</Grid.Col>
			</Grid>

			<Text fz={14} fw={700} mt={70} ml={15}>
				OFFICE ADDRESS
			</Text>
			<Text w={311} fz={12} fw={400} mt={14} ml={16} lh={"19.6px"}>
				401-403, Diamond Industrial Estate,Ketki Pada Road, Dahisar (East), Mumbai 400068,
				Maharashtra, India.
			</Text>

			<Text mt={40} ml={16} fw={700}>
				WAYS TO CONNECT
			</Text>

			<Grid>
				<Grid.Col span={6}>
					<Stack ml={15}>
						<Text fz={12} fw={400} mt={11} c={"#555459"}>
							Email: <br />
							<Anchor fz={12}>
								enquiry@libratherm.com, <br />
								libratherm@libratherm.com
							</Anchor>
						</Text>
					</Stack>
				</Grid.Col>
				<Grid.Col span={6}>
					<Stack ml={35}>
						<Text fz={12} fw={400} mt={11} c={"#555459"}>
							Mobile: <br />
							<Anchor fz={12}>
								+91-8104971152 <br />
								+91-8104971154 <br />
								+91-9082687279
								<br />
								+91-9821136685
								<br />
							</Anchor>
						</Text>
					</Stack>
				</Grid.Col>
			</Grid>

			<Stack mt={40} align="center" mb={90}>
				<OptionsButton w={279} mt={40}>
					DOWNLOAD BROCHURE
				</OptionsButton>
				<PrimaryButton
					w={279}
					mt={24}
					leftSection={<IconBrandWhatsapp color="#25D366" size={24} />}
					style={{
						paddingRight: "8px",
					}}
				>
					Get it on Whatsapp
				</PrimaryButton>
				<Text fz={14} fw={700} mt={32}>
					WE ARE SOCIAL !
				</Text>
				<Group mt={25}>
					<IconBrandFacebookFilled size={24} style={{ color: "#555459" }} />
					<IconBrandLinkedin size={24} style={{ color: "#555459" }} />
					<IconBrandTwitterFilled size={24} style={{ color: "#555459" }} />
					<IconBrandYoutubeFilled size={24} style={{ color: "#555459" }} />
					<IconBrandWhatsapp size={24} style={{ color: "#555459" }} />
				</Group>
			</Stack>
		</>
	);
};

export default Footer;
