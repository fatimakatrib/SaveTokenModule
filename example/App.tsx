import Saving_shared_token, { saveToken, getToken  as getTokenFromModule, resetToken    } from 'saving_shared_token';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    async function fetchToken() {
      const token = await getTokenFromModule();
      console.log("Retrieved token:", token);
    }

    fetchToken();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>

        <Group name="Async functions">
          <Button
            title="Set Token"
            onPress={async () => {
              console.log('start')
              await saveToken("my-secret-token-mazne1111");
              console.log("Token saved!");
            }}
          />
        </Group>

        <Group name="Fetch Token Again">
          <Button
            title="Get Token"
            onPress={async () => {
              const token = await getTokenFromModule();
              console.log("Token:", token);
            }}
          />
        </Group>

          <Group name="reset">
          <Button
            title="reset Token"
            onPress={async()=>{
              await resetToken()
            }}
          />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
