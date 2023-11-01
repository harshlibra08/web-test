// import { Paper } from "@mantine/core";
// import React from "react";

// type Props = {};

// const Login = (props: Props) => {
// 	return <Paper w={1440} h={1720} bg={"#f4f4f4"} mt={40}></Paper>;
// };

import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	PaperProps,
	Button,
	Divider,
	Checkbox,
	Anchor,
	Stack,
	Card,
	Tabs,
	Box,
} from "@mantine/core";
import { OptionsButton } from "./BaseApp/App";

export function Login(props: PaperProps) {
	const [type, toggle] = useToggle(["login", "register"]);
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		validate: {
			email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
			password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null),
		},
	});

	return (
		<>
			<Paper w={1440} h={1720} bg={"#f4f4f4"} mt={40} visibleFrom="md">
				<Box pt={40}>
					<Tabs
						color="rgba(0, 0, 0, 1)"
						radius="xs"
						defaultValue="login"
						w={620}
						h={85}
						bg={"white"}
						ml={418}
					>
						<Tabs.List grow mt={136}>
							<Tabs.Tab py={30} value="login" fz={16}>
								Already have an account ?
							</Tabs.Tab>
							<Tabs.Tab py={25} value="register" bg={"#f4f4f4"} fz={16}>
								Need to register an account ?
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
					<Card w={620} h={482} ml={418} shadow="md">
						<Stack>
							<Text ml={60} mt={61} fz={16} c={"#262728"} fw={600}>
								ACCOUNT LOGIN
							</Text>
							<Text fz={32} fw={600} c={"#262728"} ml={61}>
								Existing User Login
							</Text>
							<TextInput label="Username or Email Address" w={499} ml={61} withAsterisk></TextInput>
							<TextInput label="Password" w={499} ml={61} withAsterisk></TextInput>
							<Group>
								<Checkbox size={"16px"} label="Remember Me" ml={61} mt={21} c="#292929" />
								<Anchor mt={21} ml={245} component="button" type="button" c="dimmed" size="xs">
									Forgot Password ?
								</Anchor>
							</Group>
							<OptionsButton w={499} ml={61} mt={18}>
								LOGIN
							</OptionsButton>
						</Stack>
					</Card>
				</Box>
				<Box pt={40}>
					<Tabs
						color="rgba(0, 0, 0, 1)"
						radius="xs"
						defaultValue="login"
						w={620}
						h={85}
						bg={"white"}
						ml={418}
					>
						<Tabs.List grow mt={136}>
							<Tabs.Tab py={30} value="login" fz={16} bg={"#f4f4f4"}>
								Already have an account ?
							</Tabs.Tab>
							<Tabs.Tab py={25} value="register" fz={16}>
								Need to register an account ?
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
					<Card w={620} h={656} ml={418} shadow="md">
						<Stack>
							<Text ml={60} mt={61} fz={16} c={"#262728"} fw={600}>
								NEW USERS
							</Text>
							<Text fz={32} fw={600} c={"#262728"} ml={61}>
								Create Your User Account
							</Text>
							<TextInput label="Username " w={499} ml={61} withAsterisk></TextInput>
							<TextInput label="Email Address " w={499} ml={61} withAsterisk></TextInput>
							<TextInput label="Password" w={499} ml={61} withAsterisk></TextInput>
							<Text fz={16} c={"#555459"} w={500} ml={60} mt={32}>
								Your personal data will be used to support your experience throughout this website,
								to manage access to your account, and for other purposes described in our privacy
								policy.
							</Text>
							<OptionsButton w={499} ml={61} mt={18}>
								REGISTER
							</OptionsButton>
						</Stack>
					</Card>
				</Box>
			</Paper>

			{/**MOBILE VIEW */}
			<Paper w={360} h={520} mt={40} hiddenFrom="xs">
				<Tabs
					color="rgba(0, 0, 0, 1)"
					styles={{
						tab: {
							alignContent: "flex-start",
						},
					}}
					defaultValue="login"
					w={328}
					bg={"white"}
					ml={16}
				>
					<Tabs.List>
						<Tabs.Tab value="login" fz={16} w={164} lh={"normal"}>
							Already have <br /> an account ??
						</Tabs.Tab>
						<Tabs.Tab value="register" fz={16} lh={"normal"}>
							Need to register <br /> an account ?
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Card w={328} h={412} ml={16} shadow="md">
					<Stack gap={0}>
						<Text mt={16} fz={12} c={"#262728"} fw={600}>
							ACCOUNT LOGIN
						</Text>
						<Text fz={18} mt={8} fw={600} c={"#262728"}>
							Existing User Login
						</Text>
						<TextInput label="Username or Email Address" w={296} mt={24} withAsterisk></TextInput>
						<TextInput label="Password" w={296} mt={24} withAsterisk></TextInput>
						<Group>
							<Checkbox size={"12px"} label="Remember Me" mt={21} c="#292929" />
							<Anchor mt={21} ml={58} component="button" type="button" c="dimmed" fz={12}>
								Forgot Password ?
							</Anchor>
						</Group>
						<OptionsButton w={296} mt={36}>
							LOGIN
						</OptionsButton>
					</Stack>
				</Card>
			</Paper>

			<Paper w={360} h={720} mb={500} hiddenFrom="xs">
				<Tabs
					color="rgba(0, 0, 0, 1)"
					styles={{
						tab: {
							alignContent: "flex-start",
						},
					}}
					defaultValue="register"
					w={328}
					bg={"white"}
					ml={16}
				>
					<Tabs.List>
						<Tabs.Tab value="login" fz={16} w={164} lh={"normal"}>
							Already have <br /> an account ?
						</Tabs.Tab>
						<Tabs.Tab fz={16} lh={"normal"} value="register">
							Need to register <br /> an account ?
						</Tabs.Tab>
					</Tabs.List>
				</Tabs>
				<Card w={328} h={606} ml={16} shadow="md">
					<Stack gap={0}>
						<Text mt={16} fz={12} c={"#262728"} fw={600}>
							NEW USERS
						</Text>
						<Text fz={18} mt={8} fw={600} c={"#262728"}>
							Create Your User Account
						</Text>
						<TextInput label="Username " w={296} mt={24} withAsterisk></TextInput>
						<TextInput label="Email Address " w={296} mt={24} withAsterisk></TextInput>
						<TextInput label="Password" w={296} mt={24} withAsterisk></TextInput>
						<Text fz={14} c={"#555459"} w={300} mt={24}>
							Your personal data will be used to support your experience throughout this website, to
							manage access to your account, and for other purposes described in our privacy policy.
						</Text>
						<OptionsButton w={296} mt={36}>
							REGISTER
						</OptionsButton>
					</Stack>
				</Card>
			</Paper>

			{/**Tablet */}
			<Paper w={768} h={2020} bg={"#f4f4f4"} mt={40} visibleFrom="xs" hiddenFrom="md">
				<Box pt={40}>
					<Tabs
						color="rgba(0, 0, 0, 1)"
						radius="xs"
						defaultValue="login"
						w={620}
						h={85}
						bg={"white"}
						ml={90}
					>
						<Tabs.List grow mt={136}>
							<Tabs.Tab py={30} value="login" fz={16}>
								Already have an account ?
							</Tabs.Tab>
							<Tabs.Tab py={25} value="register" bg={"#f4f4f4"} fz={16}>
								Need to register an account ?
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
					<Card w={620} h={482} ml={90} shadow="md">
						<Stack>
							<Text ml={60} mt={61} fz={16} c={"#262728"} fw={600}>
								ACCOUNT LOGIN
							</Text>
							<Text fz={32} fw={600} c={"#262728"} ml={61}>
								Existing User Login
							</Text>
							<TextInput label="Username or Email Address" w={499} ml={61} withAsterisk></TextInput>
							<TextInput label="Password" w={499} ml={61} withAsterisk></TextInput>
							<Group>
								<Checkbox size={"16px"} label="Remember Me" ml={61} mt={21} c="#292929" />
								<Anchor mt={21} ml={245} component="button" type="button" c="dimmed" size="xs">
									Forgot Password ?
								</Anchor>
							</Group>
							<OptionsButton w={499} ml={61} mt={18}>
								LOGIN
							</OptionsButton>
						</Stack>
					</Card>
				</Box>
				<Box pt={40}>
					<Tabs
						color="rgba(0, 0, 0, 1)"
						radius="xs"
						defaultValue="login"
						w={620}
						h={85}
						bg={"white"}
						ml={90}
					>
						<Tabs.List grow mt={136}>
							<Tabs.Tab py={30} value="login" fz={16} bg={"#f4f4f4"}>
								Already have an account ?
							</Tabs.Tab>
							<Tabs.Tab py={25} value="register" fz={16}>
								Need to register an account ?
							</Tabs.Tab>
						</Tabs.List>
					</Tabs>
					<Card w={620} h={656} ml={90} shadow="md">
						<Stack>
							<Text ml={60} mt={61} fz={16} c={"#262728"} fw={600}>
								NEW USERS
							</Text>
							<Text fz={32} fw={600} c={"#262728"} ml={61}>
								Create Your User Account
							</Text>
							<TextInput label="Username " w={499} ml={61} withAsterisk></TextInput>
							<TextInput label="Email Address " w={499} ml={61} withAsterisk></TextInput>
							<TextInput label="Password" w={499} ml={61} withAsterisk></TextInput>
							<Text fz={16} c={"#555459"} w={500} ml={60} mt={32}>
								Your personal data will be used to support your experience throughout this website,
								to manage access to your account, and for other purposes described in our privacy
								policy.
							</Text>
							<OptionsButton w={499} ml={61} mt={18}>
								REGISTER
							</OptionsButton>
						</Stack>
					</Card>
				</Box>
			</Paper>
		</>
	);
}

export default Login;
