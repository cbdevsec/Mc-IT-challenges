import requests

def check_website(url):
    try:
        #checking if server is reachable
        head_response = requests.head(url, timeout=10)
        if head_response.status_code == 200:
            print("server is alive")
        else:
            print(f"Warning: server returned status code {head_response.status_code}")
        
        #getting server details
        get_response = requests.get(url, timeout=10)
        server_header = get_response.headers.get('Server', 'Unknown')
        print(f"server header: {server_header}")
        
        #checking allowed methods
        options_response = requests.options(url, timeout=10)
        allow_header = options_response.headers.get('Allow', 'Unknown')
        print(f"allowed HTTP methods: {allow_header}")
        
    except requests.exceptions.Timeout:
        print("Err: Request timed out.")
    except requests.exceptions.ConnectionError:
        print("Err: Failed to establish a connection.")
    except requests.exceptions.RequestException as e:
        print(f"an error occurred: {e}")

#printing results
if __name__ == "__main__":
    url = input("enter a URL: ")
    check_website(url)