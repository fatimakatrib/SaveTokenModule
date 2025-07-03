import ExpoModulesCore

public class Saving_shared_tokenModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('Saving_shared_token')` in JavaScript.
    Name("Saving_shared_token")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Function("saveToken") { (token: String) in
      let service = "com.yourapp.token"
      let account = "userToken"

      let tokenData = token.data(using: .utf8)!

      let query: [String: Any] = [
        kSecClass as String: kSecClassGenericPassword,
        kSecAttrService as String: service,
        kSecAttrAccount as String: account,
        kSecValueData as String: tokenData,
      ]

      SecItemDelete(query as CFDictionary)
      let status = SecItemAdd(query as CFDictionary, nil)

      if status != errSecSuccess {
        print("Keychain save failed with status: \(status)")
      }
    }

    Function("getToken") { () -> String? in
      let service = "com.yourapp.token"
      let account = "userToken"

      let query: [String: Any] = [
        kSecClass as String: kSecClassGenericPassword,
        kSecAttrService as String: service,
        kSecAttrAccount as String: account,
        kSecReturnData as String: kCFBooleanTrue!,
        kSecMatchLimit as String: kSecMatchLimitOne,
      ]

      var item: CFTypeRef?
      let status = SecItemCopyMatching(query as CFDictionary, &item)

      if status == errSecSuccess, let data = item as? Data {
        return String(data: data, encoding: .utf8)
      } else {
        return nil
      }

    }
  }
}
