// pages/api/usuarios.js

import { PrismaClient } from '@prisma/client';

// Crie uma instância do PrismaClient
const prisma = new PrismaClient();

// Função para inserir um novo usuário
async function criarUsuario() {
  try {
    // Utilize a função create para inserir um novo usuário
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome: 'Teste',
        idade: 25, // Ajuste conforme necessário
      },
    });

    console.log('Novo usuário criado:', novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    // Certifique-se de fechar a conexão do PrismaClient quando terminar
    await prisma.$disconnect();
  }
}

// Chame a função para criar o usuário
criarUsuario();
