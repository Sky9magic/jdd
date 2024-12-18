#include <bits/stdc++.h>
using namespace std;
int main() {
    string basePath = "C:\\Users\\nagor_kxkrebj\\OneDrive\\Desktop\\jd\\src\\app\\problems\\";
    for (int i = 0; i <= 27; i++) {
        string folderPath = basePath + to_string(i);
        if (filesystem::create_directory(folderPath)) {
            cout << "Created folder: " << folderPath << endl;
            string filePath = folderPath + "\\page.tsx";
            ofstream file(filePath);
            if (file.is_open()) {
                file << "\"use client\";\n\n";
                file << "import React, { useState } from \"react\";\n";
                file << "import Header from \"../../../components/header\";\n";
                file << "import \"../../../styles/subproblems.css\";\n";
                file << "import Footer from \"../../../components/footer\";\n\n";
                file << "const Page = () => {\n";
                file << "  return (\n";
                file << "    <>\n";
                file << "      <Header/>\n";
                file << "      <div className=\"pdffile\"><embed src=\"/" << i << ".pdf\" width=\"800px\" height=\"600px\" type=\"application/pdf\"></embed></div>\n";
                file << "      <Footer/>\n";
                file << "    </>\n";
                file << "  );\n";
                file << "};\n";
                file << "export default Page;\n";
                file.close();
                cout << "Created file: " << filePath << endl;
            } else {
                cerr << "Error creating file: " << filePath << endl;
            }
        } 
        else {
            cerr << "Error creating folder: " << folderPath << endl;
        }
    }
}
