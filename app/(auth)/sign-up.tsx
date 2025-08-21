import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onSignUpPress = async () => {

    }

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Crie a sua conta
                    </Text>
                </View>
                <View className="p-5">
                    <InputField 
                        label="Nome"
                        placeholder="Digite o seu nome"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) => setForm({
                            ...form, 
                            name: value})}
                    />
                    <InputField 
                        label="Email"
                        placeholder="Digite o seu email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) => setForm({
                            ...form, 
                            email: value})}
                    />
                    <InputField 
                        label="Senha"
                        secureTextEntry={true}
                        placeholder="Digite a sua senha"
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(value) => setForm({
                            ...form, 
                            password: value})}
                    />    

                    <CustomButton 
                    title="Criar conta"
                    onPress={onSignUpPress} 
                    className="mt-10"/>

                    <OAuth></OAuth>

                    <Link href="/(auth)/sign-in" className="text-lg text-center text-general-200 mt-10">
                            <Text>Já tem uma conta? </Text>
                            <Text className="text-primary-500">Entre aqui</Text>
                    </Link>
                </View>   

                { /* Modal de Verificação */ }

            </View>
        </ScrollView>
    )
}

export default SignUp;

