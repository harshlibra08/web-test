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
} from "@tabler/icons-react";
import React from "react";
import footer from "./Assets/footer.png";
import { OptionsButton, PrimaryButton } from "./BaseApp/App";
type Props = {};

const Footer = (props: Props) => {
	return (
		<Paper w={1440} h={824} mt={220}>
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

export default Footer;
