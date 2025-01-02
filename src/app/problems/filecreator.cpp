#include <bits/stdc++.h>
#include <filesystem> // Required for filesystem operations
using namespace std;
namespace fs = std::filesystem;

int main() {
    string basePath = "C:\\Users\\nagor_kxkrebj\\OneDrive\\Desktop\\jd\\src\\app\\problems\\";
    for (int i = 28; i <= 53; i++) {
        string folderPath = basePath + to_string(i);
        if (fs::create_directory(folderPath)) {
            cout << "Created folder: " << folderPath << endl;
            string filePath = folderPath + "\\page.tsx";
            ofstream file(filePath);
            if (file.is_open()) {
                file << "\"use client\";\n\n";
                file << "import Header from \"../../../components/header\";\n";
                file << "import \"../../../styles/subproblems.css\";\n";
                file << "import Footer from \"../../../components/footer\";\n\n";
                file << "const Page = () => {\n";
                file << "  return (\n";
                file << "    <>\n";
                file << "      <Header/>\n";
                file << "      <div className=\"main\">\n";
                file << "        <a className=\"submit\" href=\"https://codeforces.com/group/eScIVDG1u2/contest/553127/submit\" target=\"_blank\" rel=\"noopener noreferrer\">\n";
                file << "          Submit Code\n";
                file << "        </a>\n";
                file << "        <div className=\"pdffile\">\n";
                file << "          <embed src=\"/" << i << ".pdf\" width=\"800px\" height=\"600px\" type=\"application/pdf\"></embed>\n";
                file << "        </div>\n";
                file << "      </div>\n";
                file << "      <Footer/>\n";
                file << "    </>\n";
                file << "  );\n";
                file << "};\n\n";
                file << "export default Page;\n";
                file.close();
                cout << "Created file: " << filePath << endl;
            } else {
                cerr << "Error creating file: " << filePath << endl;
            }
        } else {
            cerr << "Error creating folder: " << folderPath << endl;
        }
    }
    return 0;
}
