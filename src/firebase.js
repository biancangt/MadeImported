// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // 🚀 Importa o Storage
import firebaseConfig from "./firebaseConfig";

// Inicializa o Firebase App
const app = initializeApp(firebaseConfig);

// Instancia os serviços do Firebase
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // 🚀 Inicializa o Storage

// Função para buscar os produtos no Firestore
export async function buscarProdutos() {
  try {
    const produtosCol = collection(db, "produtos");
    const produtosSnapshot = await getDocs(produtosCol);
    const produtosList = produtosSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return produtosList;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}

// Exporta tudo para usar nos outros arquivos
export { app, db, auth, storage };
