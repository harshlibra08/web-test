import { Paper, List, Text, Title, Image, UnstyledButton, Grid, Divider } from "@mantine/core";
import { IconChevronsDown } from "@tabler/icons-react";
import React from "react";
import LandingBg from "../Assets/LandingBG.png";
import LandingMobile from "../Assets/LandingMobile.png";

type Props = {};

const Landing = (props: Props) => {
	return (
		<>
			<Paper w={1400} h={688} visibleFrom="md">
				<Divider my="sm" mb={-1} />
				<Grid>
					<Grid.Col span={6}>
						<Title
							style={{
								fontSize: "34px",
								fontWeight: "600",
								lineHeight: "51.2px",
								marginLeft: "114px",
								marginTop: "123px",
								color: "#262728",
							}}
						>
							Partners in <br />
							Measurement & Control
						</Title>
						<Text
							style={{
								fontSize: "14px",
								fontWeight: "400",
								color: "#555459",
								lineHeight: "22.4px",
								marginTop: "26px",
								marginLeft: "114px",
								width: "592px",
							}}
						>
							Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified Indian Company engaged
							in the manufacturing of Electronic Process Control Instruments and Systems since 1991.
						</Text>

						<List mt={24}>
							<List.Item
								style={{
									width: "566px",
									fontSize: "14px",
									fontWeight: "400",
									color: "#555459",
									lineHeight: "28px",
									marginLeft: "124px",
								}}
							>
								Field Proven Products : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
							</List.Item>
							<List.Item
								pt={8}
								style={{
									width: "566px",
									fontSize: "14px",
									fontWeight: "400",
									color: "#555459",
									lineHeight: "28px",
									marginLeft: "124px",
								}}
							>
								Latest Technology : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
							</List.Item>
						</List>

						<UnstyledButton ml={124} mt={37}>
							Get Started {<IconChevronsDown size="14px" color="#1D1D1B" />}
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={6}>
						<Image style={{ height: "688px", width: "1209px" }} src={LandingBg} />
					</Grid.Col>
				</Grid>
			</Paper>

			{/**Mobile View */}
			<Paper w={360} h={688} hiddenFrom="xs">
				<Grid>
					<Grid.Col span={12}>
						<Image src={LandingMobile} w={437} h={282} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Title fz={20} fw={600} ml={16} mt={24} c={"#262728"}>
							Partnersss in <br />
							Measurement & Control
						</Title>
						<Text fz={12} fw={400} ml={16} mt={12} c={"#555459"} w={328} ta={"justify"}>
							Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified Indian Company engaged
							in the manufacturing of Electronic Process Control Instruments and Systems since 1991.
						</Text>

						<List>
							<List.Item ml={20} w={275} fz={12} c={"#555459"} fw={400} pt={16}>
								Field Proven Products : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
							</List.Item>
							<List.Item ml={20} w={275} fz={12} c={"#555459"} fw={400} pt={16}>
								Latest Technology : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
							</List.Item>
						</List>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**Tablet View */}
			<Paper w={768} h={888} hiddenFrom="md" visibleFrom="xs">
				<Grid>
					<Grid.Col span={12}>
						<Image src={LandingMobile} w={840} h={482} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Title fz={32} fw={600} ml={90} mt={24} c={"#262728"}>
							Partnersss in Measurement & Control
						</Title>
						<Text fz={14} fw={400} ml={90} mt={26} c={"#555459"} w={592} ta={"justify"}>
							Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified Indian Company engaged
							in the manufacturing of Electronic Process Control Instruments and Systems since 1991.
						</Text>

						<List>
							<List.Item ml={90} w={592} fz={14} c={"#555459"} fw={400} mt={24}>
								Field Proven Products : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
							</List.Item>
							<List.Item ml={90} w={592} fz={14} c={"#555459"} fw={400} mt={24}>
								Latest Technology : Certified Indian Company engaged in the manufacturing of
								Electronic Process Control
							</List.Item>
						</List>
					</Grid.Col>
				</Grid>
			</Paper>
		</>
	);
};
export default Landing;
