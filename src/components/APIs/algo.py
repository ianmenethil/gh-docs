import json
# from algoliasearch.search_client import SearchClient


def load_api_data(filepath):
    with open(filepath, "r", encoding='utf-8') as file:
        data = json.load(file)
    return data


def extract_type(param):
    """Extracts the type from a parameter schema, handling nested schemas and references more comprehensively."""
    if "type" in param:
        return param["type"]
    elif "schema" in param:
        return handle_schema(param["schema"])
    return "Type not specified"


def handle_schema(schema):
    """Handle complex schema definitions and extract meaningful type information."""
    if "type" in schema:
        return schema["type"]
    elif "$ref" in schema:
        # Extracting the last part of the reference to indicate the complex type's name
        ref_type = schema["$ref"].split("/")[-1]
        return f"Reference to {ref_type}"  # More informative than just 'complex object'
    elif "items" in schema:
        # Handle arrays specifically
        if "type" in schema["items"]:
            return f"Array of {schema['items']['type']}"
        elif "$ref" in schema["items"]:
            ref_type = schema["items"]["$ref"].split("/")[-1]
            return f"Array of references to {ref_type}"
        return "Array of complex objects"
    elif "properties" in schema:
        # If the schema has properties, it's likely an object with fields
        return "complex object"
    return "Unknown type"


default_descriptions = {
    "customerReference": "Unique identifier for the customer, used to fetch specific customer details or perform actions related to the customer.",
    "statusRequest": "Contains details for updating the status of a customer, such as activating, deactivating, or altering customer status flags.",
    "account": "Represents customer account information necessary for updates, including account type, status, and other pertinent financial details.",
    "profile": "Holds all relevant customer profile information that may be updated, such as contact information, preferences, and demographic data.",
    "paymentOption": "Details the customer payment option settings to be updated, which might include payment methods, billing cycles, and payment terms.",
    "refundRequest": "Includes information necessary for processing a refund, detailing the amount, reason for refund, and transaction identifiers.",
    "paymentReference": "Reference identifier for a specific payment, used to fetch, update, or process actions related to the payment.",
    "customerPaymentOption": "Specifies options or settings in a customer's payment setup that can be modified or updated, like enabling or disabling payment methods or adjusting payment limits.",
    "paymentCustomerReference": "Customer reference used specifically for payment transactions to link payments to the correct customer account.",
    "fromProcessedDate": "Start date for filtering the payments based on their processed date. Format should be YYYY-MM-DD.",
    "toProcessedDate": "End date for filtering the payments based on their processed date. Format should be YYYY-MM-DD.",
    "settlementDate": "Date when the payment was settled, used for filtering payments. Format should be YYYY-MM-DD.",
    "paymentSettlement": "Unique identifier for the payment settlement, used to fetch payments based on settlement details.",
    "transactionTypes": "List of transaction types to filter payments. Expected to be an array of transaction type identifiers.",
    "isRecalled": "Boolean flag to filter payments that have been recalled. Use true to filter recalled payments.",
    "isRefunded": "Boolean flag to filter payments that have been refunded. Use true to filter refunded payments.",
    "offset": "The starting index for the list of payments returned by the query. Useful for pagination.",
    "limit": "The maximum number of payment records to return. Useful for controlling pagination size.",
}


def extract_description(param):
    """Extracts the description from a parameter, providing a detailed fallback."""
    description = param.get("description", "").strip()
    if description:
        return description
    elif param["name"] in default_descriptions:
        return default_descriptions[param["name"]]
    elif "schema" in param:
        schema = param["schema"]
        if "$ref" in schema:
            ref_type = schema["$ref"].split("/")[-1]  # Extracts reference name
            return f"Details for {ref_type} (see schema definition)"
        elif "type" in schema:
            return f"Type: {schema.get('type', 'No type specified')}"
    return "Description not available"



def extract_and_format_data(api_data):
    algolia_records = []
    for path, methods in api_data["paths"].items():
        for method, info in methods.items():
            parameters = [
                {
                    "name": param.get("name"),
                    "in": param.get("in"),
                    "required": param.get("required", False),
                    "type": extract_type(param),
                    "description": extract_description(param),
                }
                for param in info.get("parameters", [])
            ]

            responses = {
                status: resp.get("description", "Response details not provided")
                for status, resp in info.get("responses", {}).items()
            }

            record = {
                "objectID": f"{method.upper()} {path}",
                "path": path,
                "method": method.upper(),
                "description": info.get(
                    "summary", "Endpoint description not available"
                ),
                "parameters": parameters,
                "responses": responses,
                "tags": info.get("tags", []),
            }
            algolia_records.append(record)
    return algolia_records


def save_algo_data(data, filepath):
    with open(filepath, 'w') as file:
        json.dump(data, file, indent=2)


# def send_to_algolia(data):
#     client = SearchClient.create("YourApplicationID", "YourAdminAPIKey")
#     index = client.init_index("api_docs")
#     index.save_objects(data)


def main():
    api_data = load_api_data('APIs.json')
    formatted_data = extract_and_format_data(api_data)
    save_algo_data(formatted_data, 'APIs_algolia.json')
    # send_to_algolia(formatted_data)
    print("Data sent to Algolia successfully!")

if __name__ == "__main__":
    main()
