<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AfficheController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function relationAction(): Response
    {
        return $this->render('affiche/parant.html.twig');
    }
    /**
     * @Route("/affiche", name="app_affiche")
     */
    public function index(): Response
    {
        return $this->render('affiche/vue.html.twig');
    }
}

